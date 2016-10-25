'use strict';

import express from 'express';
import router from './routes/index.js';
import Grant from 'grant';

const grantMiddle = new Grant(require(./oauthconfig.json));
const app = express();

app.use(grantMiddle);
app.use(router);
app.listen(process.env.PORT || 8080);

export default app;
