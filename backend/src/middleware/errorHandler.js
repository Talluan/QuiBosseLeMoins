import Logger from "../utils/Logger.js";

const convertErrorinJSON = (err) => {
    return {
        statusCode: err.statusCode || 500,
        message: err.message || 'Internal server error'
    }
}

const errorHandler = (err, req, res, next) => {
    Logger.error(err.message);
    Logger.log(err.stack);
    const jsonErr = convertErrorinJSON(err);
    res.header("Content-Type", 'application/json');
    res.status(jsonErr.statusCode).json(jsonErr);
};

export {
    errorHandler
}