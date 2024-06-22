import trhowErrorHandller from "../../utills/trhowErrorHandller";
import Car from "../car/car.model";
import { BookingInterface } from "./booking.interface";
import Booking from "./booking.model";
import User from "../user/user.model";

const createBookingDB = async (payload: BookingInterface, userID: string) => {


    const carid = await Car.findById(payload.car)

    if (!carid) {
        trhowErrorHandller('car not found')
    }
    // find user id from db
    const user = await User.findById(userID)

    const info = {
        date: payload.date,
        user: user,
        car: carid,
        startTime: payload.startTime,
        endTime: payload.endTime,
        totalCost: payload.totalCost,
    }
    const result = await Booking.create(info)
    return result
}

const getAllBookingsfromDB = async ()=>{
    const result = await Booking.find()
    return result
}

export const BookingServices = {
    createBookingDB,
    getAllBookingsfromDB
}