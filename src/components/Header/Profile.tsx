import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps){
  return(
    <Flex align='center'>
      {showProfileData && (
      <Box ml='4' mr='4' textAlign='right'>
        <Text>Peterson Pereira</Text>
        <Text color='gray.300' fontSize='small'>petersonbozza7@gmail.com</Text>
      </Box>
      )}

    <Avatar size='md' name='Peterson Pereira'/>
  </Flex>
  )
}