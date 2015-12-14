var user    = require('../controllers/users'),
    express = require('express'),
    router  = express.Router()
    ;

router.get('/', user.message);

module.exports = router;
