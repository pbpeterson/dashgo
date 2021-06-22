import { Flex, useBreakpointValue,IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })

  return(
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
      >

        {!isWideVersion && (
          <IconButton
            aria-label='Open Nav'
            icon={<Icon as={RiMenuLine}/>}
            fontSize='24'
            variant='unstyled'
            onClick={onOpen}
            mr='2'
            />
        )}
        <Logo/>
        {isWideVersion && <SearchBox/>}

        <Flex 
      aling='center'
      ml='auto'
      >
        <NotificationNav />
      
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}