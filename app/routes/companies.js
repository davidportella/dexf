var companies = require('../controllers/companies'),
    express   = require('express'),
    router    = express.Router()
    ;

router.get('/', companies.find);
router.get('/:id(\\d+)', companies.findOne);
router.post('/', companies.create);
router.post('/:id(\\d+)', companies.update);
router.delete('/:id(\\d+)', companies.destroy);

router.get('/:id(\\d+)/parkings', companies.find_parking);
router.get('/:id(\\d+)/parkings/:id(\\d+)', companies.findOne_parking);
router.post('/:id(\\d+)/parkings', companies.create_parking);
router.post('/:id(\\d+)/parkings/:id(\\d+)', companies.update_parking);
router.delete('/:id(\\d+)/parkings/:id(\\d+)', companies.destroy_parking);

module.exports = router;
