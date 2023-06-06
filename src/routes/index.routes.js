const { Router } = require('express');
const router = Router();

const { renderAbout, renderIndex, renderTerms , renderAdmin} = require('../controllers/index.controller')


const { getItems, updateItem} = require('../controllers/users.db')

const { isAuthenticated } = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/terms', renderTerms);

router.get('/about', isAuthenticated, renderAbout);

router.get('/admin', isAuthenticated, renderAdmin);

router.get('/get', isAuthenticated, getItems);

router.get('/update', isAuthenticated, updateItem);

module.exports = router;