import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

class db {

    static #instance = null;

    static getInstance = () => {
        if (!db.instance) {
            db.instance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT,
                logging: false
            });
        }
        return db.instance;
    }

    static testConnection = async () => {
        try {
            await this.getInstance().authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    static sync = async () => {
        try {
            await this.getInstance().sync();
        } catch (error) {
            console.error('Unable to sync the database:', error);
        }
    }

}

export default db;