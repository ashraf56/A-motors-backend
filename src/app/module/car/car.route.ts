import { Router } from "express";
import { CarContoller } from "./car.controller";
import authGuardValidator from "../../middleware/authGuard";


const router = Router()

router.post('/create-car',authGuardValidator('admin'), CarContoller.createCarController)


export const CarRoute = router