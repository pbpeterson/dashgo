import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Thead, Tr, Th, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'
import Link  from 'next/link'
import { useQuery } from 'react-query'

export default function Userlist(){
  const { data, isLoading, error } = useQuery('users', async ()=>{
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    
    const users = data.users.map((user)=>{
      return{
        id: user.id,
        name:user.name,
        email: user.email,
        createdAt : new Date(user.createAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })
    return users
  })

  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true
  })
  return(
    <Box>
      <Header/>
      <Flex  w='100%' my='6' maxWidth={1480} max='auto' px='6'>
        <Sidebar/>

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon fontSize='20' as={RiAddLine}/>}>
              Criar novo usuário
              </Button>
            </Link>
          </Flex>
        
       {isLoading ? (
         <Flex justify='center'>
           <Spinner />
         </Flex>
       ): error ? (
         <Flex justify = 'center'>
           <Text>Erro ao obter dados do usuário</Text>
         </Flex>
       ) :(
         <>
          <Table colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
              <Th px={['4', '4', '6']} color='gray.300' w='8'>
                <Checkbox colorScheme='pink'/>
              </Th>
              <Th>Usuário</Th>
              {isWideVersion &&(
                <Th>Data de cadastro</Th>
              )}
              <Th w='8'></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(user =>(
              <Tr key={user.id}>
              <Td px={['4', '4', '6']} >
                <Checkbox colorScheme='pink'/> 
              </Td>
              <Td>
                <Box>
                  <Text fontWeight='bold'>{user.name}</Text>
                  <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                </Box>
              </Td>
              {isWideVersion && (
                <Td>{user.createdAt}</Td>
              )}
              <Td>
              {isWideVersion &&(
                <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon fontSize='20' as={RiPencilLine }/>}>
                Editar
              </Button>
              )}
              </Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
        <Pagination/>
         </>
       )}

        </Box>

      </Flex>
    </Box>
  )
}