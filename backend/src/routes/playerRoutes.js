import express from "express";
import { getAccountData, getPlayers } from "../controllers/playerContoller.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    res.send(await getPlayers(req, res));
});

router.get("/account/:gamerTag/:tagLine", async (req, res, next) => {
    res.send(await getAccountData(req, res));
});



export default router;