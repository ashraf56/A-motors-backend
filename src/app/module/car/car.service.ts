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



const getALlCarInfoFromDB = async () => {
    const result = await Car.find()
    return result
}


const getSIngleCArDB = async (id: string) => {
    const result = await Car.findById({ _id: id })
    return result
}

const deleteAcarDB = async (id: string) => {
    const result = await Car.findByIdAndUpdate({ _id: id },
        {
            isDeleted: true
        },
        { new: true })

        return result
}

export const CarService = {
    CreateCarDB,
    getALlCarInfoFromDB,
    getSIngleCArDB,
    deleteAcarDB
}

