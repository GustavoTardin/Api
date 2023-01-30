module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ message: 'Token not found' });
    }
    if (authorization.length < 16) {
        return res.status(401).send({ message: 'Expired or invalid token' });
    }
    next();
};