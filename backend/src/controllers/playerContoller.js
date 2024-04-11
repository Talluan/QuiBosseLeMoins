import { fetchAccountData, fetchPlayers, fetchPlayerData, savePlayer, existPlayer, parseData, updatePlayer } from "../services/playerService.js";

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
        let savedPlayer;
        if (!exist) {
            savedPlayer = await savePlayer(finalData);
        } else {
            savedPlayer = await updatePlayer(finalData);
        }

        return finalData;
    } catch (error) {
        throw error;
    }
    
};

const getPlayers = async (req, res) => {
    const players = await fetchPlayers();
    return players;
};

export {
    getAccountData,
    getPlayers
}