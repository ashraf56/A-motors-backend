import trhowErrorHandller from "../../utills/trhowErrorHandller";
import { CarInterface } from "./car.interface";
import Car from "./car.model";



const CreateCarDB = async (payload: CarInterface) => {

    const existCar = await Car.findOne({ name: payload.name })
    if (existCar) {
        trhowErrorHandller("Already  created")
    }


    const cars = await Car.create(payload)
    return cars;
}





export const CarService = {
    CreateCarDB
}

