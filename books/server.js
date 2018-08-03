const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'session-secret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000,
  },
};

const cookieSecret =
  process.env.COOKIE_SECRET || ';alsfkjals;dkfj;alskdfj;alskdfj';
require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger('dev'))
  .use(express.static(path.resolve('dist/public')))
  .use(cookieParser(cookieSecret))
  .use(session(sessionConfig))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'));
app.listen(port, () => console.log(`Express server listening on port ${port}`));
