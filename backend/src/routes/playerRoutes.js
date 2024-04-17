import express from "express";
import { getAccountData, getPlayers } from "../controllers/playerContoller.js";

const router = express.Router();


/**
 * @swagger
 * /players:
 *   get:
 *     summary: Obtenir tous les joueurs
 *     description: Retourne toutes les informations sur les joueurs disponibles.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de joueurs.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Player'
 * definitions:
 *   Player:
 *     type: object
 *     properties:
 *       puuid:
 *         type: string
 *       firstName:
 *         type: string
 *       gameName:
 *         type: string
 *       tagLine:
 *         type: string
 *       summonerLevel:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date-time
 *       updatedAt:
 *         type: string
 *         format: date-time
 *     example:
 *       puuid: "fknelzkbu"
 *       firstName: null
 *       gameName: "test"
 *       tagLine: "EUW"
 *       summonerLevel: null
 *       createdAt: "2024-04-11T14:31:52.456Z"
 *       updatedAt: "2024-04-11T14:31:52.456Z"
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
 *     responses:
 *       200:
 *         description: Return player account data
 *       404:
 *         description: Player not found  
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