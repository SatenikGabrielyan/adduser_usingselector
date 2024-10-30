import { useSelector } from "react-redux"
import { getAllUsers, users } from "./user.slice"
import { useAppDispatch } from "../../app/hooks"
import { useEffect } from "react"
import { UserItem } from "./useritem"
import { AddUser } from "./adduser"

export const Users = () => {
    const list = useSelector(users)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllUsers())

    }, [list])
    
    return <>
    <AddUser/>
    <h3>Users </h3>
    {
        list.map(user => <UserItem key={user.id} user={user} />)
    }
    </>
}