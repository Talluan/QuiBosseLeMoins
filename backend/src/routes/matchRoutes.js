/**
 * @swagger
 * components:
 *   schemas:
 *     Match:
 *       type: object
 *       required:
 *         - gameId
 *       properties:
 *         gameId:
 *           type: string
 *           description: The  match's gameId
 *         gameCreation:
 *           type: date
 *           description: The match's creation date
 *         gameDuration:
 *           type: int
 *           description: The match's duration
 *         gameMode:
 *           type: string
 *           description: The match's game mode
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the match was played
 *       example:
 *        gameId: "EUW1_6839921593"
 *        gameCreation: "2024-03-02T16:53:35.380Z"
 *        gameDuration: 1457
 *        gameMode: "CLASSIC"
 *        createdAt: 2024-04-17T18:25:28.195Z"
 *        updatedAt: 2024-04-17T18:25:28.195Z"
 */

import express from 'express';
import { getAllMatches, getMatchById, saveMatches, getMatchesByPlayer } from '../controllers/matchController.js';

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Matches
 *   description: "API pour les matchs"
 * /matches:
 *   get:
 *     summary: Obtenir tous les matchs enregistrés
 *     description: Retourne toutes les informations sur les matchs disponibles.
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de matchs.
 */
router.get('/', async (req, res, next) => {
    res.send(await getAllMatches(req, res));
});

/**
 * @swagger
 * /matches/{gameId}:
 *   get:
 *     summary: Obtenir tous les matchs enregistrés
 *     description: Retourne toutes les informations sur les matchs disponibles.
 *     tags: [Matches]
 *     parameters:
 *       - name: gameId
 *         in: path
 *         required: true
 *         description: The match's gameId
 *         type: string
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de matchs.
 */
router.get('/:gameId', async (req, res, next) => {
    res.send(await getMatchById(req, res));
});

/**
 * @swagger
 * /matches/:
 *   post:
 *     summary: Enregistre un tableau de matches
 *     description: Enregistre tous les matchs passés dans le body.
 *     tags: [Matches]
 *     parameters:
 *       - in: body
 *         required: true
 *         description: The array of matches
 *         name: games
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *           example: ["EUW1_6839921593", "EUW1_6839921594"]
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de matchs.
 */
router.post('/', async (req, res, next) => {
    res.send(await saveMatches(req, res));
});

/**
 * @swagger
 * /matches/player/{puuid}:
 *   get:
 *     summary: Obtenir tous les matchs enregistrés
 *     description: Retourne toutes les informations sur les matchs disponibles.
 *     tags: [Matches]
 *     parameters:
 *       - name: puiid
 *         in: path
 *         required: true
 *         description: L'identifiant du joueur.
 *         type: string
 *     responses:
 *       200:
 *         description: Succès. Retourne un tableau de matchs.
 */
router.get('/player/:puuid', async (req, res, next) => {
    res.send(await getMatchesByPlayer(req, res));
});


export default router;