'use strict';

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/slackAuditorTesting')

import User from './user.js';

export default {
  User
}