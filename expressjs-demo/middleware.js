const accessControl = (req, res, next) => {
    console.log("accessControl")
    next();
}

const logger = (req, res, next) => {
    console.log("my logger");
    next();
}


module.exports = { accessControl, logger }
