import { Router } from "express";
import { Userroute } from "../module/user/user.route";
import { CarRoute } from "../module/car/car.route";

const router = Router();

const allroute = [
    {
        path: '/auth',
        route:Userroute
        
    },
    {
        path: '/cars',
        route:CarRoute
        
    }
]


allroute.forEach(r => router.use(r.path,r.route))

export default router;