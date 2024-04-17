import { fetchAccountData, fetchPlayers, fetchPlayerData, savePlayer, existPlayer, parseData, updatePlayer, fetchHistory, fetchPlayer, updateFirstName } from "../services/playerService.js";
import Logger from "../utils/Logger.js";

const getAccountData = async (req, res) => {
    try {
        const { gamerTag, tagLine } = req.params;
        console.log(gamerTag, tagLine);
        // appel des apis
        const accountData = await fetchAccountData(gamerTag, tagLine);
        const lolAccountData = await fetchPlayerData(accountData.puuid);
        
        // parsing des données
        const finalData = parseData(accountData, lolAccountData);
        const exist = await existPlayer(gamerTag, tagLine); 


        // enregistrement en base
        if (!exist) {
            await savePlayer(finalData);
        } else {
            await updatePlayer(finalData);
        }

        return finalData;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
    
};

const getPlayers = async (req, res) => {
    const players = await fetchPlayers();
    return players;
};


const getPlayer = async (req, res) => {
    const { puuid } = req.params;
    const player = await fetchPlayer(puuid);
    return player;
};

const updatePlayerByGamerTag = async (req, res) => {
    const { gamerTag, tagLine, firstName } = req.params;
    try {
        const player = await updateFirstName(gamerTag, tagLine, firstName);
        return player;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
}

const getHistory = async (req, res) => {
    const { gamerTag, tagLine } = req.params;
    try {
        const accountData = await fetchAccountData(gamerTag, tagLine);
        const history = await fetchHistory(accountData.puuid);
        return history;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
}



export {
    getAccountData,
    getPlayers,
    getHistory,
    getPlayer,
    updatePlayerByGamerTag
}