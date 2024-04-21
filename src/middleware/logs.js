const logRequest = (req, res, next) => {
    console.log('Terjadi Request PATH: ', req.path);
    next();
}

module.exports = logRequest;