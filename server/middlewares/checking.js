module.exports.checkUserData = function(req,res,next){
    if(!req.body.username || !req.body.email || !req.body.password){
        res.sendStatus(400);
        return;
    }
    next();
}