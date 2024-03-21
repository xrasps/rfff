import { useEffect, useState } from "react"

export default function UsersPage(){

    const[users,setUsers] = useState([])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(() => {
        fetchUsers()
    },[])
    

    return(
        <section className="users">
            <div className="container">
                <h1>Пользователи</h1>
                <ul>
                    {
                    users.map((user) =>{
                        return(
                            <li>
                                Имя пользователя: {user.name}<br></br><br></br>                            Почта: {user.email}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </section>
    )
}