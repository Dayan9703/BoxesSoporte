const {Router}  = require('express');
const router = Router();

const {renderAbout, renderIndex} = require('../controllers/index.controller')

const {isAuthenticated} = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/about',isAuthenticated, renderAbout);

module.exports = router;