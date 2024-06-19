/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { tryCatchWrapper } from "../utills/tryCatchWrapper"
import trhowErrorHandller from "../utills/trhowErrorHandller";

const authGuardValidator = ()=>{
return tryCatchWrapper(
    async (req:Request,res:Response,next:NextFunction)=>{
   const authHeader =  req.headers.authorization as string;
   if (!authHeader || !authHeader.startsWith('Bearer')) {
    trhowErrorHandller('You have no access to this route ')
   }


   console.log(authHeader);
   
    }
    
    
)


}


export default authGuardValidator