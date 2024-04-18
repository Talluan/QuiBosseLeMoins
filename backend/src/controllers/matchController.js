import { getMatch, fetchMatch, existMatch, saveMatch, parseMatch, getMatches, getMatchWithId } from "../services/matchService.js";
import Logger from "../utils/Logger.js";

const getMatchById = async(req, res) => {
    const { gameId } = req.params;
    try {
        const match = await getMatchWithId(gameId);
        return match;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
}

const getAllMatches = async(req, res) => {
    try {
        const matches = await getMatches();
        return matches;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
}

const saveMatches = async (req, res) => {
    const matches = req.body;
    try {
        for (let match in matches) {
            const exist = await existMatch(matches[match]);
            if (!exist) {
                const game = getMatchWithId(matches[match]);

            }
        }
        return matches;
    } catch (error) {
        Logger.error(error);
        throw error;
    }

}

export {
    getMatchById,
    getAllMatches,
    saveMatches
}