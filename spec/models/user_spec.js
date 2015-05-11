require('should');
var testHelper = require('../test_helper.js');
var models  = require('../../models');

describe('User', function() {
	it('should be able to create a user correctly', function (done) {
    models.User.create({
      email: 'pchu@gmail.com',
      password: 'hello'
    }).then(function(user){
      user.email.should.equal('pchu@gmail.com');
      user.password.should.not.equal('hello');
      done();
    });
	});

  it('should validate correct password', function (done) {
    models.User.create({
      email: 'pchu@gmail.com',
      password: 'hello'
    }).then(function(user){
      user.password.should.not.equal('hello');
      user.validPassword('hello').should.be.ok;
      done();
    });
  });
});
