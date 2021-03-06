import {Button} from '@chakra-ui/react'

interface PaginationItemProps{
  isActive?: boolean;
  page: number;
  onPageChange: (page:number) => void;
}

export function PaginationItem({isActive = false, page, onPageChange}: PaginationItemProps){
  if(isActive){
    return(
      <Button
      size='sm'
      fontSize='xs'
      w='4'
      colorScheme='pink'
      disabled
      _disabled={{
        bg:'pink.500',
        cursor:'default'
      }}
      >{page}
      </Button>
    )
  }
  return(
    <Button
    size='sm'
    fontSize='xs'
    w='4'
    bg='gray.700'
    _hover={{
      bg:'gray.500'
    }}
    onClick={()=>onPageChange(page)}
    >{page}
    </Button>
  )
}