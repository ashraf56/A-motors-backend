import { Model } from "mongoose";

export interface Userinterface {
    name: string;
    email: string;
    role?: 'user' | 'admin';
    password: string;
    phone: string;
    address: string

}



export interface Usermodels extends Model<Userinterface>{
    isPasswordmatch(inputtextPassword:string,hashpassword:string):Promise<boolean>
}