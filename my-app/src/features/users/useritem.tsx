import React from "react"
import { IUser } from "./types"
import { useAppDispatch } from "../../app/hooks"
import { deleteUser } from "./user.slice"

interface IProps{
    user:IUser
}
export const UserItem:React.FC<IProps> = ({user}) => {

    const dispatch = useAppDispatch()
    return <div style={{height:50, width:150, padding:10, background:"yellowgreen", margin:20}}>

        <strong>{user.name} </strong>
        <strong>{user.surname} </strong>
        <strong>{user.age}</strong>
        
        <button style={{height:20, width:80, background:"orange"}} onClick={() => dispatch(deleteUser(user.id))}>delete</button>
        
        
    
    </div>
}