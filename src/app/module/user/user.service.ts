import { Userinterface } from "./user.interface";
import User from "./user.model";


const createUserDB = async (payload:Userinterface)=>{

const result = await User.create(payload)
return result 

}


export const Userservices ={
    createUserDB
}