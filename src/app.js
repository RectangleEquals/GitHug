/////////////////////////////////////////////
// Imports
/////////////////////////////////////////////
require('dotenv').config()
const express = require('express');
const session = require('express-session');
const app = express();
const nocache = require('nocache');
const passport = require('passport');
const githubStrategy = require('./strategies/githubstrategy');
const sessionSecrets = require('./utilities/session-secrets');
const PORT = process.env.PORT || 3001;

/////////////////////////////////////////////
// Middleware & Routes
/////////////////////////////////////////////
app.use(nocache());

const indexRoute = require('./routes/index');
app.use(['/', '/index', '/index.htm', '/index.html]'], indexRoute);

const authRoute = require('./routes/auth.js');
app.use('/auth', authRoute);

app.use(express.static('public'));

app.use(session({
  secret: sessionSecrets.get(),
  cookie: {
    maxAge: 86400
  },
  saveUninitialized: false
}));

/////////////////////////////////////////////
// OAuth/Passport
/////////////////////////////////////////////
app.use(passport.initialize());
app.use(passport.session());
githubStrategy.use()
  .then(() => {
    console.log("[SUCCESS]");
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("[FAILURE]:" + err);
  });
