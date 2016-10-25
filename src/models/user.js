'use strict';

import mongoose from 'mongoose';

var User = mongoose.model('User', { 
  username: String 
});