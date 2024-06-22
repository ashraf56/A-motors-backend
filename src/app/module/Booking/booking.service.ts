import trhowErrorHandller from "../../utills/trhowErrorHandller";
import Car from "../car/car.model";
import { BookingInterface } from "./booking.interface";
import Booking from "./booking.model";
import User from "../user/user.model";
import { startSession } from "mongoose";

const createBookingDB = async (payload: BookingInterface, userID: string) => {


    const carid = await Car.findById(payload.car)

    if (!carid) {
        trhowErrorHandller('car not found')
    }

    // find user id from db
    const user = await User.findById(userID)

    const session = await startSession()
    try {
        session.startTransaction()

        if (carid?.status === 'unavailable') {
            trhowErrorHandller('Booking not success')
        }


        const info = {
            date: payload.date,
            user: user,
            car: carid,
            startTime: payload.startTime,
            endTime: payload.endTime,
            totalCost: payload.totalCost,
        }
        const createABook = await Booking.create([info], { session })

        if (!createABook) {
            trhowErrorHandller('Booking not success')
        }
          

        const updateSatatus = await Car.findByIdAndUpdate({ _id: payload.car }, {
            $set: {
                status: 'unavailable'
            }

        },
            { upsert: true, new: true, session }
        )

        if (!updateSatatus) {
            trhowErrorHandller('Booking not success')

        }


        await session.commitTransaction()
        await session.endSession()
        const confirmBook = await Booking.findOne(payload.user).populate('user').populate('car')
        return confirmBook

    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        trhowErrorHandller('Booking not success')


    }


}

const getAllBookingsfromDB = async () => {
    const result = await Booking.find().populate('user').populate('car')
    return result
}



export const BookingServices = {
    createBookingDB,
    getAllBookingsfromDB,
  
}