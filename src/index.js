'use strict';

import express from 'express';
import router from './routes/index.js';
import models from './models/index.js';

const app = express();

app.use(function (req, res, next) {
  res.contentType('application/json');
  next();
});
app.use(router);
app.listen(process.env.PORT || 8080);

export default app;