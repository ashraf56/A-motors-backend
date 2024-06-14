import { Router } from "express";

const router = Router();

const Allroute = [
    {
        path: '/',
        
    }
]


Allroute.forEach(r => router.use(r.path))

export default router;