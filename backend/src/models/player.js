import dataBase from "../db/db.js";
import Sequelize from "sequelize";

const db = dataBase.getInstance();

const Player =  db.define('player', {
    puuid: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        required: false
    },
    gameName: {
        type: Sequelize.STRING
    },
    tagLine: {
        type: Sequelize.STRING
    },
    summonerLevel: {
        type: Sequelize.INTEGER,
        required: false
    }

})

db.sync();


export default Player;