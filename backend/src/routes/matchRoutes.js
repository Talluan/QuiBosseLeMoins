import express from 'express';
import { getMatches } from '../controllers/matchController.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.send(await getMatches(req, res));
});

export default router;