import { useQuery } from "react-query"
import { api } from "../api"

type User ={
  id: string;
  name:string;
  email:string;
  create_at:string;
}

type getUsersResponse = {
  total: number;
  users: User[]
}

export async function getUsers(page) : Promise<getUsersResponse>{

    const { data, headers } = await api.get('users',{
      params:{
        page,
      }
    })

    const total = Number(headers['x-total-count'])
    
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
    return {
      users,
      total
    }
  }

export function useUsers(page){
  return useQuery(['users', page], ()=> getUsers(page), {
    staleTime: 1000 * 60 * 10 //10 minutos
  })
} 