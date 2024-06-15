import { Router } from "express";
import { Userroute } from "../module/user/user.route";

const router = Router();

const allroute = [
    {
        path: '/auth',
        route:Userroute
        
    }
]


allroute.forEach(r => router.use(r.path,r.route))

export default router;