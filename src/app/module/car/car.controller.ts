import { tryCatchWrapper } from "../../utills/tryCatchWrapper";
import { CarService } from "./car.service";


const createCarController = tryCatchWrapper(
    async (req,res)=>{
        const payload = req.body;
        const result = await CarService.CreateCarDB(payload)
        
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Car created successfully",
            data: result
        })
    }
)


const getAllCarController = tryCatchWrapper(
    async (req,res)=>{
        const result = await CarService.getALlCarInfoFromDB();
 
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Cars retrieved  successfully",
            data: result
        })
        
    }
)

export const CarContoller = {
    createCarController,
    getAllCarController
}