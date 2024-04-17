import { getPuuidUrl, getLolAccountUrl, getMatchHistoryUrl } from "../utils/urls.js"
import Player from "../models/Player.js";
import fetch from 'node-fetch';
import Logger from "../utils/Logger.js";
import { DataNotFound, UnvalidParam } from "../utils/Error.js";
import { where } from "sequelize";

// Requêtes en base

const fetchPlayers = async () => {
    try {
        const players = await Player.findAll();
        return players;
    }
    catch {
        Logger.error("Error getting players from the database");
    }
};
const fetchPlayer = async () => {
    try {
        const player = await Player.findOne();
        return player;
    }  
    catch {
        Logger.error(`Error getting player from the database`);
    }
};

const fetchPlayerByPuuid = async (puuid) => {
    try {
        const player = await Player.findOne({ puuid: puuid });
        return player;
    }
    catch {
        Logger.error(`Error getting player by puuid ${puuid}`);
    }
};

const existPlayer = async (gamerTag, tagLine) => {
    try {
        const player = await Player.findOne({ where: {gameName: gamerTag, tagLine: tagLine}});
        return player? true : false;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
};


const savePlayer = async (player) => {
    try {
        if (!player) {
            throw new UnvalidParam("playerService", "player");
        }
        const newPlayer = Player.build(player);
        await newPlayer.save();
        Logger.info(`Player ${player.gameName} saved to the database`);
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
};

const updatePlayer = async (player) => {
    try {
        if (!player) {
            throw new UnvalidParam("playerService", "player");
        }
        const updatedPlayer = await Player.update(player, { where: { puuid: player.puuid } });

        Logger.info(`Player ${player.gameName} updated in the database`);
        return updatedPlayer;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }

}

// Requêtes API

const fetchAccountData = async (gamerTag, tagLine) => {
    const url = getPuuidUrl(gamerTag, tagLine);
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data?.status?.status_code) {
            throw new DataNotFound("playerService", `${gamerTag}#${tagLine}`);
        }
        return data;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
}

const fetchPlayerData = async (puuid) => {
    const url = getLolAccountUrl(puuid);
    try {
    const response = await fetch(url);
        const data = await response.json();
        if (data?.status?.status_code) {
            throw new DataNotFound("playerService", `${puuid}`);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

const fetchHistory = async (puuid) => {
    const url = getMatchHistoryUrl(puuid);
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data?.status?.status_code) {
            throw new DataNotFound("playerService", `${puuid}`);
        }
        return data;
    } catch (error) {
        Logger.error(error);
        throw error;
    }
}

const parseData = (accountData, gameData) => {
    const finalData = {
        puuid: accountData.puuid,
        gameName: accountData.gameName,
        tagLine: accountData.tagLine,
        summonerLevel: gameData.summonerLevel
    }
    return finalData;
};


export {
    fetchAccountData,
    fetchPlayerByPuuid,
    fetchPlayerData,
    fetchPlayers,
    fetchPlayer,
    fetchHistory,
    savePlayer,
    existPlayer,
    updatePlayer,
    parseData
}