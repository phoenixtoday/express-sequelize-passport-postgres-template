process.env.NODE_ENV = 'test';

var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner("postgresql");
var config = require('../config/config.json');
var models  = require('../models');
var connectionString = 'postgres://' + config['test']['username'] + '@' + config['test']['host']  + '/' + config['test']['database'];
var pg = require('pg');

before(function(done) {
  models.sequelize.sync().then(function() {
    console.log('Syncing database for NODE_ENV' + process.env.NODE_ENV);
    done();
  });
});

afterEach(function (done) {
  cleanUpDb(function() {
    done();
  });
});

exports.cleanUpDb = cleanUpDb = function(callback) {
	pg.connect(connectionString, function(err, client, done) {
    databaseCleaner.clean(client, function(){
      models.User.count().then(function(count){
        count.should.equal(0);
        done();
        callback();
      });
    });
  });
};

