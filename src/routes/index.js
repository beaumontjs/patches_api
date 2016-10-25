'use strict';

import express from 'express';
const router = express.Router();

import users from './users.js'
import badges from './badges.js'

router.get('/users', users);
router.get('/badges', badges);

export default router;