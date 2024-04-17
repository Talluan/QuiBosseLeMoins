import express from 'express';
import { getAllMatches, getMatchById } from '../controllers/matchController.js';

const router = express.Router();


/**
 * @swagger
 * /matches:
 *  get:
 *   summary: Obtenir tous les matchs
 *  description: Retourne toutes les informations sur les matchs disponibles.
 * produces:
 * - application/json
 * responses:
 * 200:
 * description: Succès. Retourne un tableau de matchs.
 * schema:
 * type: array
 * items:
 * $ref: '#/definitions/Match'
 * definitions:
 * Match:
 * type: object
 * properties:
 * gameId:
 * type: string
 * gameCreation:
 * type: string
 * gameDuration:
 * type: string
 * gameMode:
 * type: string
 * example:
 * gameId: "fknelzkbu"
 * gameCreation: "2024-04-11T14:31:52.456Z"
 * gameDuration: "30"
 * gameMode: "ARAM"
 */
router.get('/', async (req, res, next) => {
    res.send(await getAllMatches(req, res));
});

router.get('/:gameId', async (req, res, next) => {
    res.send(await getMatchById(req, res));
});

export default router;