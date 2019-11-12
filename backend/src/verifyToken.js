const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({
        error: "Access denied!"
    });

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
}

module.exports = auth;