/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface Userinterface {
    name: string;
    email: string;
    role?: 'user' | 'admin';
    password: string;
    phone: string;
    address: string

}

// export interface UserRoletypes = keyof User

export interface Usermodels extends Model<Userinterface>{
    isPasswordmatch(inputtextPassword:string|unknown,hashpassword:string|unknown):Promise<boolean>
}