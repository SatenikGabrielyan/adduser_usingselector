import axios from "axios"
import { createAppSlice } from "../../app/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { InputUser, IState, IUser } from "./types"
import { aC } from "vitest/dist/reporters-yx5ZTtEV.js"
const initialState:IState = {
    list:[]
}

export const userSlice = createAppSlice({
    name:"users",
    initialState,
    reducers:create => ({
        getAllUsers:create.asyncThunk(
            async () => {
                const response = await axios.get("http://localhost:3004/users")
                return response.data
            },
            {
                fulfilled:(state, action:PayloadAction<IUser[]>) => {
                    state.list = action.payload
                } 
            }
        ),
        deleteUser:create.asyncThunk(
            async (id:string) => {
                const response = await axios.delete("http://localhost:3004/users/" + id)
                return response.data
            },
            {
                fulfilled:(state, action:PayloadAction<string>) => {
                    state.list = state.list.filter(user => user.id != action.payload)
                }
            }
        ),

        addUser:create.asyncThunk(
            async(user:InputUser) => {
                const response = await axios.post("http://localhost:3004/users", user)
                return response.data

            },
            {
                fulfilled:(state, action:PayloadAction<IUser>) => {
                    state.list = [...state.list, action.payload]
                }
            }
        )
    }),
    selectors:{
        users:state => state.list
    }
})

export const {users} = userSlice.selectors
export const {getAllUsers, deleteUser, addUser} = userSlice.actions