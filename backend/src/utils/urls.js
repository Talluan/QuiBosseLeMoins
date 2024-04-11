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
}

const getPuuidUrl = (gamerTag, tagLine) => {
    const apiKey = getApiKey();
    return `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gamerTag}/${tagLine}?api_key=${apiKey}`
};

export {
    getPuuidUrl
}