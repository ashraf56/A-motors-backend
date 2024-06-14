import { Router } from "express";

const router = Router();

const allroute = [
    {
        path: '/',
        
    }
]


allroute.forEach(r => router.use(r.path))

export default router;