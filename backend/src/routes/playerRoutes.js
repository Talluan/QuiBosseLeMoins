import express from "express";
import { getAccountData, getPlayers } from "../controllers/playerContoller.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.send(await getPlayers(req, res));
    } catch (error) {
        next(error);
    }
});

router.get("/account/:gamerTag/:tagLine", async (req, res, next) => {
    try {
        const result = await getAccountData(req, res); 
        res.send(result); 
    } catch (error) {
        next(error);
    }
});



export default router;