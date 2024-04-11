import { getPuuidUrl } from "../utils/urls.js"
import Player from "../models/Player.js";
import fetch from 'node-fetch';
import Logger from "../utils/Logger.js";
import { UnvalidParam } from "../utils/Error.js";
import { where } from "sequelize";

const fetchPlayers = async () => {
    try {
        const players = await Player.findAll();
        return players;
    }
    catch {
        Logger.error("Error getting players from the database");
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

const fetchAccountData = async (gamerTag, tagLine) => {
    const url = getPuuidUrl(gamerTag, tagLine);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const existPlayer = async (gamerTag, tagLine) => {
    try {
        const player = await Player.findOne({ where: {gameName: gamerTag, tagLine: tagLine}});
        if (player) {
            return true;
        }
        return false;
    }
    catch (error) {
        Logger.error(error);
    }
};

const mapPlayer = (data) => {


};

const savePlayer = async (player) => {
    try {
        if (!player) {
            throw new UnvalidParam("playerService", "player");
        }
        const newPlayer = Player.build(player);
        await newPlayer.save();
        Logger.info(`Player ${player.gamerTag} saved to the database`);
    }
    catch (error) {
        Logger.error(error);
    }
};

export {
    fetchAccountData,
    fetchPlayerByPuuid,
    fetchPlayers,
    savePlayer,
    existPlayer
}