'use strict';

import express from 'express';
const router = express.Router();

import users from './users.js'
import badges from './badges.js'

router.get('/users', users);
router.get('/badges', badges);

import authRoutes from './auth/routes.js';
import twitterAuth from './auth/twitter.js';

router.get('/auth/routes', authRoutes);
router.get('/auth/twitter', twitterAuth);

export default router;