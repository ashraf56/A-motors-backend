/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config/config";

const globalErrorhandler: ErrorRequestHandler = ((error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const message = error.message || "something error"

    type Errorsource = {
        path: string | number,
        message: string
    }[]


    const errorSource: Errorsource = [
        {
            path: '',
            message: "something error"
        }
    ]

    return res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        stack: config.Node_Env === 'development' ? error?.stack : null
    })

})

export default globalErrorhandler;