import { Types } from "mongoose";


export interface BookingInterface {
    date: Date;
    user: Types.ObjectId;
    car: Types.ObjectId;
    startTime: string;
    endTime: string;
    totalCost: number;
}