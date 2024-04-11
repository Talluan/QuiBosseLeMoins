import { fetchAccountData, fetchPlayers, savePlayer, existPlayer } from "../services/playerService.js";

const getAccountData = async (req, res) => {
    const { gamerTag, tagLine } = req.params;
    console.log(gamerTag, tagLine);
    const accountData = await fetchAccountData(gamerTag, tagLine);
    const exist = await existPlayer(gamerTag, tagLine); 
    if (!exist) {
        const savedPlayer = await savePlayer(accountData);
    }
    res.send(accountData);
};

const getPlayers = async (req, res) => {
    const players = await fetchPlayers();
    res.send(players);
};

export {
    getAccountData,
    getPlayers
}