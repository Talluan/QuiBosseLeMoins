import dataBase from '../db/db.js';
import Sequelize from 'sequelize';

const db = dataBase.getInstance();

const Match = db.define('matches', {
    gameId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    gameCreation: {
        type: Sequelize.DATE
    },
    gameDuration: {
        type: Sequelize.INTEGER
    },
    gameMode: { 
        type: Sequelize.STRING
    }

})

export default Match;