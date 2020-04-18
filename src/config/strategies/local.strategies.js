const passport = require("passport");
const { Strategy } = require("passport-local");
const adminController = require("../../../controllers/admin_controllers")


module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      usernameField: "username",
      passwordField: "password"
    }, async (username, password, done) => {
      try {
        const resp = await adminController.authenticate({ username });
        if (resp.password === password) {
          done(null, resp);
        }
        else {
          done(null, false);
        }

      }
      catch (err) {
        console.log(err);
      }

    }

  ));
}