const jwt = require('jsonwebtoken');
const secretKey = 'TOKEN_SECRET';

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access Denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json('Invalid Token.');
    }
};

module.exports = authenticate