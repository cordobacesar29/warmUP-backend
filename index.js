const express = require('express');
const app = express();
const port = 5000;

const apiRouter = require('./routes/api');

require('./db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});