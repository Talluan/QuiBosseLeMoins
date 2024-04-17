import express from 'express';
import { getAllMatches, getMatchById } from '../controllers/matchController.js';

const router = express.Router();


router.get('/', async (req, res, next) => {
    res.send(await getAllMatches(req, res));
});

router.get('/:gameId', async (req, res, next) => {
    res.send(await getMatchById(req, res));
});

export default router;