import { HStack, Box, Button } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination(){
  return(
    <HStack spacing='6' mt='8' justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing='2'>
        <PaginationItem isActive page={1}/>
        <PaginationItem  page={2}/>
        <PaginationItem  page={3}/>
        <PaginationItem  page={4}/>
        <PaginationItem  page={5}/>
        <PaginationItem  page={6}/>
      </HStack>
    </HStack>
  )
}