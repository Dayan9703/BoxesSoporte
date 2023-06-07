const { Router } = require('express');
const { renderSignUpForm, signin, signup, renderSigninForm, logout} = require('../controllers/users.controller');
const router = Router();
const {isAuthenticated, isAdmin} = require('../helpers/auth');
const { renderEditForm, updateUser } = require('../controllers/index.controller');

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSigninForm);
router.post('/users/signin', signin);

router.get('/users/logout', logout);

router.get("/users/edit/:id", isAuthenticated, isAdmin, renderEditForm);

router.put("/users/edit/:id", isAuthenticated, isAdmin, updateUser);

module.exports = router;