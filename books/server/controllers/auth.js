const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        if (!user) throw new Error();

        return User.validatePassword(password, user.password).then(valid => {
          if (!valid) throw new Error();

          // handle login
          completeLogin(request, response, user);
        });
      })
      .catch(error => {
        response.status(401).json('User/password combo not found');
      });
  },
  register(request, response) {
    console.log('register', request.body);
    User.create(request.body)
      .then(user => {
        console.log('user', user);
        // handle login
        completeLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
