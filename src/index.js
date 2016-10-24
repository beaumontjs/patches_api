'use strict';

import express from 'express';

const app = express();

app.get('/', function(req, res) {

});

app.listen(process.env.PORT || 8080);

export default app;