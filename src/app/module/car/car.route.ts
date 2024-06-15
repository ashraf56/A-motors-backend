import { Router } from "express";
import { CarContoller } from "./car.controller";


const router = Router()

router.post('/create-car',CarContoller.createCarController)


export const CarRoute = router