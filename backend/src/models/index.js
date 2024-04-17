import Match from "./match.js";
import Player from "./Player.js";
import dataBase from '../db/db.js';
import Sequelize from 'sequelize';

const db = dataBase.getInstance();

const playerMatch = db.define('playerMatch', {
    puuid: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
            model: Player,
            key: 'puuid'
        }
    },
    gameId: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
            model: Match,
            key: 'gameId'
        }
    },
    win: {
        type: Sequelize.BOOLEAN
    },
    role: {
        type: Sequelize.STRING
    },
    champion: {
        type: Sequelize.STRING
    },
    kills: {
        type: Sequelize.INTEGER
    },
    deaths: {
        type: Sequelize.INTEGER
    },
    assists: {
        type: Sequelize.INTEGER
    }
})

Player.belongsToMany(Match, { foreignKey: 'puuid', through: playerMatch });
Match.belongsToMany(Player, { foreignKey: 'gameId', through: playerMatch });

db.sync();

export { Player, Match, playerMatch };