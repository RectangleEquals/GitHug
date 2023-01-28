/////////////////////////////////////////////
// OAuth GitHub Page
/////////////////////////////////////////////

const passport = require('passport');
const router = require('express').Router();

// Only GitHub logins are supported for now
router.get('/', (req, res) => res.redirect('/auth/github'));

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/', failureMessage: true }),
  (req, res) => {
    res.redirect('/').status(200);
  }
);

module.exports = router;