
export interface IState{
    list:IUser[]
}

export interface IUser{
    id:string
    name:string
    surname:string
    age:number
}

export type InputUser = Omit<IUser, "id">

