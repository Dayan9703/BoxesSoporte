const {Router}  = require('express');
const router = Router();

const {renderAbout, renderIndex, renderTerms} = require('../controllers/index.controller')

const {isAuthenticated} = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/terms', renderTerms);

router.get('/about',isAuthenticated, renderAbout);

module.exports = router;