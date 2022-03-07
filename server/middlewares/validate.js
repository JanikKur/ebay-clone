const jwt = require('jsonwebtoken');

module.exports = function validateUser(req, res, next) {
    const token = req.cookies.jwt;
    jwt.verify(token, 'StRoNGs3crE7', (err, result) => {
        if(result){
            req.user = result;
            next();
        }
        else{
            res.sendStatus(401)
        }
    });
}