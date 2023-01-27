require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = ({ email, id }) => jwt.sign({ id, email }, secret, jwtConfig);

const authenticateToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
        const decryptedData = jwt.verify(authorization, secret);
        req.user = decryptedData;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    generateToken,
    authenticateToken,
};