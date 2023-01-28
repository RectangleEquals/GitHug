const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');
const storage = require('../utilities/user-storage');

const handler = async function(profile, resolve, reject)
{
  await storage.add(profile, _ => {
    resolve();
  }, error => {
    reject(error);
  });
}

const use = async function(resolve, reject)
{
  passport.use(new GitHubStrategy({
      clientID: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
      callbackURL: process.env.CALLBACK_URL_GITHUB
    },
    (accessToken, refreshToken, profile, cb) => {
      handler(profile, _ => {
        cb();
      }, error => {
        console.error('[githubstrategy.use]: ' + error);
      });
    }
  ));
}

module.exports = { use };