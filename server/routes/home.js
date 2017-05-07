"use strict";

const express = require( 'express');
const homeController = require( '../controllers/home');
const authController = require( '../controllers/auth');

const router = express.Router();

router.get('/', authController.isAuthenticated, homeController.index );
router.route('/login')
    .get( homeController.login )
    .post( authController.Login);
router.get('/logout', authController.Logout);

module.exports = router;
