import dataBase from '../config/database.js';
import Sequelize from 'sequelize';

const db = dataBase.getInstance();

const Match = db.define('match', {
    gameId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    queueId: {
        type: Sequelize.INTEGER
    },
    mapId: {
        type: Sequelize.INTEGER
    },
    seasonId: {
        type: Sequelize.INTEGER
    },
    gameVersion: {
        type: Sequelize.STRING
    },
    gameMode: {
        type: Sequelize.STRING
    },
    gameType: {
        type: Sequelize.STRING
    },
    gameCreation: {
        type: Sequelize.DATE
    },
    gameDuration: {
        type: Sequelize.INTEGER
    }
})

db.sync();


export default Match;