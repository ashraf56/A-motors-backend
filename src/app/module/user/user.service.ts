import trhowErrorHandller from "../../utills/trhowErrorHandller";
import { Userinterface } from "./user.interface";
import User from "./user.model";


const createUserDB = async (payload: Userinterface) => {
    const isUserexist = await User.findOne({ email: payload.email })

    if (isUserexist) {
        trhowErrorHandller('User already found')
    }
    const result = await User.create(payload)
    return result

}


const LogInUserDB = async (payload: Userinterface) => {


    const isUserexist = await User.findOne({ email: payload.email })

    if (!isUserexist) {
        trhowErrorHandller('User not found')
    }




}


export const Userservices = {
    createUserDB,
    LogInUserDB
}