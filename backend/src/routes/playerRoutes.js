/**
 * @swagger
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       required:
 *         - puuid
 *       properties:
 *         puuid:
 *           type: string
 *           description: The player's puuid
 *         firstName:
 *           type: string
 *           description: The player's first name
 *         gameName:
 *           type: string
 *           description: The player's game name
 *         tagLine:
 *           type: string
 *           description: The player's tag line
 *         summonerLevel:
 *           type: int
 *           description: The player's summoner level
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the player was created
 *       example:
 *        puuid: "pHIYo4mJ8u7o1oO7R8T0DOMAkijLPMozvWBFfgt-o0cwRml8uak6uEzFAqvGH6JApdFb9-Xy8i22yQ"
 *        firstName: Jean
 *        gameName: "Pirukos"
 *        tagLine: "EUW"
 *        summonerLevel: 142
 */

import express from "express";
import { getAccountData, getPlayers, getHistory, getPlayer } from "../controllers/playerController.js";

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Players
 *   description: "API pour les joueurs"
 * /players:
 *   get:
 *     summary: Obtenir tous les joueurs
 *     description: Retourne toutes les informations sur les joueurs disponibles.
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de joueurs.
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
 * /players/{gamerTag}/{tagLine}:
 *   get:
 *     summary: Obtenir les informations d'un joueur
 *     description: Retourne les informations d'un joueur en fonction de son gamerTag et de son tagLine.
 *     tags: [Players]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: gamerTag
 *         in: path
 *         required: true
 *         type: string
 *       - name: tagLine
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return player account data
 *       404:
 *         description: Player not found  
 */
router.get("/:gamerTag/:tagLine", async (req, res, next) => {
    try {
        const result = await getAccountData(req, res); 
        res.send(result); 
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /players/{puuid}:
 *   get:
 *     summary: Obtenir les informations d'un joueur
 *     description: Retourne les informations d'un joueur en fonction de son puuid.
 *     tags: [Players]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puuid
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return player account data
 *       404:
 *         description: Player not found  
 */
router.get("/:puuid", async (req, res, next) => {
    try {
        const result = await getPlayer(req, res); 
        res.send(result); 
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /players/history/{gamerTag}/{tagLine}:
 *   get:
 *     summary: Obtenir l'historique d'un joueur
 *     description: Retourne l'historique d'un joueur à partir de son gamerTag et de son tagLine.
 *     tags: [Players]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: gamerTag
 *         in: path
 *         required: true
 *         type: string
 *       - name: tagLine
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return player history data
 *       404:
 *         description: Player not found  
 */
router.get("/history/:gamerTag/:tagLine", async (req, res, next) => {
    try {
        const result = await getHistory(req, res); 
        res.send(result); 
    } catch (error) {
        next(error);
    }
});



export default router;