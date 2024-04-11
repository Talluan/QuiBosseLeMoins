import express from "express";
import { getAccountData, getPlayers } from "../controllers/playerContoller.js";

const router = express.Router();


/**
 * @swagger
 * /players:
 *   get:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all players
 *   definitions:
 *     Player:
 *       type: object
 *       properties:
 *         puuid:
 *           type: string
 *         firstName:
 *           type: string
 *         gameName:
 *           type: string
 *         tagLine:
 *           type: string
 *         summonerLevel:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       required:
 *         - puuid
 *         - gameName
 *         - tagLine
 *         - createdAt
 *         - updatedAt
 */
router.get("/", async (req, res, next) => {
    try {
        res.send(await getPlayers(req, res));
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 *
 * /players/account/{gamerTag}/{tagLine}:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: gamerTag
 *         in: formData
 *         required: true
 *         type: string
 *       - name: tagLine
 *         in: formData
 *         required: true
 *         type: string
 */
router.get("/account/:gamerTag/:tagLine", async (req, res, next) => {
    try {
        const result = await getAccountData(req, res); 
        res.send(result); 
    } catch (error) {
        next(error);
    }
});



export default router;