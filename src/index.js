'use strict';

import express from 'express';
import router from './routes/index.js'

const app = express();

app.use(router);
app.listen(process.env.PORT || 8080);

export default app;