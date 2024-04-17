import { getMatch, fetchMatch, existMatch, saveMatch, parseMatch, getMatches } from "../services/matchService.js";
import Logger from "../utils/Logger.js";

const getMatchById = async(req, res) => {
    const { gameId } = req.params;
    try {
    const exist = await existMatch(gameId);
    let match;
    if (exist) {
        match = await getMatch(gameId);
    } else {
        const matchFetched = await fetchMatch(gameId);
        match = await saveMatch(matchFetched);
    }
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

export {
    getMatchById,
    getAllMatches
}