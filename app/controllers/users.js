//var Comment = require('../models/comment'),
//    auth    = require('../middlewares/auth')

exports.message = function (req, res, next) {
    res.json({message: 'api users'});
};
