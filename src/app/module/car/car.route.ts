import { Router } from "express";
import { CarContoller } from "./car.controller";
import authGuardValidator from "../../middleware/authGuard";
import validateRequest from "../../middleware/validateRequest";
import { CarValidatons } from "./car.validation";


const router = Router()

router.post('/create-car',
    authGuardValidator('admin'),
    validateRequest(CarValidatons.createAcarValidationSchema),
    CarContoller.createCarController)

router.get('/', CarContoller.getAllCarController)

export const CarRoute = router