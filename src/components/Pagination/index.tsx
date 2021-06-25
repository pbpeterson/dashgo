import { Stack, Box, HStack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps{
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number){
  return [...new Array(to - from)].map((_, index)=>{
    return from + index + 1
  }).filter(page => page > 0 )
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps){
  const lastPage = Math.floor(totalCountOfRegisters/ registersPerPage)

  const previousPage = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1 ) : []

  const nextPages = currentPage < lastPage ? generatePagesArray(currentPage ,Math.min(currentPage + siblingsCount, lastPage) ) : []

  return(
    <Stack direction={['column', 'row']} spacing='6' mt='8' justify='space-between' align='center'>
      <Box>
        <strong>{(currentPage - 1) * registersPerPage}</strong> - <strong>{currentPage * registersPerPage}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack spacing='2'>

        {currentPage > (1 + siblingsCount) &&(
          <>
            <PaginationItem onPageChange={onPageChange}  page={1}/>
            {currentPage > (2 + siblingsCount) &&(
              <Text color='gray.300' width='8' textAlign='center'>...</Text>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page =>{
          return  <PaginationItem onPageChange={onPageChange} key={page} page={page}/>
        })}

        <PaginationItem onPageChange={onPageChange} isActive page={currentPage}/>

        {nextPages.length > 0 && nextPages.map(page =>{
          return  <PaginationItem onPageChange={onPageChange} key={page} page={page}/>
        })}

      {(currentPage + siblingsCount) < lastPage &&(
        <>
      {(currentPage + 1 + siblingsCount) < lastPage &&(
              <Text color='gray.300' width='8' textAlign='center'>...</Text>
            )}
          <PaginationItem onPageChange={onPageChange}  page={lastPage}/>
        </>
        )}

      </HStack>
    </Stack>
  )
}