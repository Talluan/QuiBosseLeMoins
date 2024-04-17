import Logger from '../utils/Logger.js';
import { UnvalidParam } from '../utils/Error.js';
import { getMatchUrl } from '../utils/urls.js';
import { existPlayerByPuuid } from './playerService.js';
import { Match, Player, playerMatch } from '../models/index.js';
// Requêtes en base

const getMatch = async (gameId) => {
    try {
        const match = await Match.findOne({ where: { gameId: gameId } });
        return match;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
}

const getMatches = async () => {
    try {
        const matches = await Match.findAll();
        return matches;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }

}

const getKnownPlayers = async (gamePlayers) => {
    const knownPlayers = [];
    for (const player of gamePlayers) {
        const exist = await existPlayerByPuuid(player);
        if (exist) {
            knownPlayers.push(player);
        }
    }
    return knownPlayers;
};



const saveMatchForKnownPlayers = async (match, knownPlayers) => {
    try {
        const matchData = parseMatch(match);
        const newMatch =  await Match.create(matchData);
        for(let player in knownPlayers){
            const foundPlayer = await Player.findOne({ where: { puuid: knownPlayers[player] }});
            const playerMatchData = parsePlayerMatch(match, foundPlayer);
            console.log(playerMatchData);
            const newPlayerMatch = await playerMatch.create(playerMatchData);
        }
        Logger.info(`Match ${match.metadata.matchId} saved for known players`);
        return newMatch;

    }
    catch (error) {
        Logger.error(error);
        throw error;
    
    }
};

const saveMatch = async (match) => {
    if(await existMatch(match.metadata.matchId)) {
        Logger.info(`Match ${match.gameId} already exists in the database`);
        return;
    }
    const gamePlayers = match.metadata.participants;
    const knownPlayers = await getKnownPlayers(gamePlayers);
    if(knownPlayers.length > 0){
        return await saveMatchForKnownPlayers(match, knownPlayers);
    }

}

const existMatch = async (gameId) => {
    try {
        const match = await Match.findOne({ where: { gameId: gameId } });
        return match ? true : false;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
}

// Requêtes API

const fetchMatch = async (gameId) => {
    const url = getMatchUrl(gameId);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        Logger.error(error);
        throw error;
    }
};

// Data parsing

const parseMatch = (data) => {
    return {
        gameId: data.metadata.matchId,
        gameMode: data.info.gameMode,
        gameDuration: data.info.gameDuration,
        gameCreation: data.info.gameCreation,
        participants: data.metadata.participants
    };
};

const parsePlayerMatch = (match, player) => {
    const participant = match.info.participants.find(participant => participant.puuid === player.puuid);
    return {
        puuid: player.puuid,
        gameId: match.metadata.matchId,
        win: participant.win,
        role: participant.role,
        champion: participant.championName,
        kills: participant.kills,
        deaths: participant.deaths,
        assists: participant.assists
    };
};

export {
    getMatch,
    saveMatch,
    fetchMatch,
    existMatch, 
    parseMatch,
    getMatches
}