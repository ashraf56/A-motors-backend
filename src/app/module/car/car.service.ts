import { CarInterface } from "./car.interface";
import Car from "./car.model";



const CreateCarDB = async (payload:CarInterface)=>{


    const cars = await Car.create(payload)
    return cars;
}


export const CarService ={
    CreateCarDB
}

