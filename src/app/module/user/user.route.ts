import { Router } from "express";
import { UserCOntrollers } from "./user.controller";



const router = Router()

router.post('/signup', UserCOntrollers.CreateUserController)


export const Userroute = router;