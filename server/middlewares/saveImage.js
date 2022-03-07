const uuid = require('uuid');

module.exports = function saveImage(req, res, next) {
    if(req.files){
        for(let file in req.files){
            const extension = req.files[file].name.split('.')[req.files[file].name.split('.').length -1];
            const fileLink = `/images/${uuid.v4()}.${extension}`
            req.files[file].mv(`${__dirname}/../public${fileLink}`);
            req.files[file].fileLink = fileLink;
        }
    }
    next();
}