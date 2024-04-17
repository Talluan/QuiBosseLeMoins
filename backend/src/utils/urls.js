import dotenv from 'dotenv';
import { ApiKeyError } from './Error.js';

dotenv.config();


const getApiKey = () => {
    try {
        if (process.env.API_KEY) {
            return process.env.API_KEY;
        }
    } catch (error) {
        throw new ApiKeyError();
    }
};

const getPuuidUrl = (gamerTag, tagLine) => {
    const apiKey = getApiKey();
    return `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gamerTag}/${tagLine}?api_key=${apiKey}`
};

const getLolAccountUrl = (puuid) => {
    const apiKey = getApiKey();
    return `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`
};

const getMatchHistoryUrl = (puuid) => {
    const apiKey = getApiKey();
    return `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
};

const getMatchUrl = (matchId) => {
    const apiKey = getApiKey();
    return `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`;
}

export {
    getPuuidUrl,
    getLolAccountUrl,
    getMatchHistoryUrl,
    getMatchUrl
}