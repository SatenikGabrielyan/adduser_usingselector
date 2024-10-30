import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addUser } from "./user.slice"
import { InputUser } from "./types"

export const AddUser = () => {
    const [user, setUser] = useState<InputUser>({
        name:"",
        surname:"",
        age:14
    })
    const dispatch = useAppDispatch()

    const handleSave = (user:InputUser) => {
        dispatch(addUser(user))
        setUser({
            name:"",
            surname:"",
            age:14
        })
    }
    
    return <>

       <input style={{padding:10}} type="text" placeholder="name"
        value={user.name} onChange={e => setUser({...user, name:e.target.value})} />
       <input style={{padding:10}}type="text" placeholder="surname" 
         value={user.surname} onChange={e => setUser({...user, surname:e.target.value})}/>
       <input style={{padding:10}} type="number" placeholder="age" 
         value={user.age} onChange={e => setUser({...user, age:+e.target.value})}/>
       <button onClick={() => handleSave(user)}>save</button>
    </>
}