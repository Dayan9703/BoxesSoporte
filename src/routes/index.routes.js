const { Router } = require('express');
const router = Router();

const { renderAbout, renderIndex, renderTerms , renderAdmin, renderEditForm, updateUser} = require('../controllers/index.controller')


const { getItems, updateItem} = require('../controllers/users.db')

const { isAuthenticated, isAdmin } = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/terms', renderTerms);

router.get('/about', isAuthenticated, renderAbout);

router.get('/admin', isAuthenticated, isAdmin, renderAdmin);

router.get('/get', isAuthenticated, getItems);

router.get('/update', isAuthenticated, updateItem);

router.get('/users/edit', isAuthenticated, isAdmin, renderEditForm);

router.put('/users/edit', isAuthenticated, isAdmin, updateUser);

module.exports = router;