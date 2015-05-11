"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'Users', {
        id   : {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        charset: 'utf8'
    }).complete(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('Users').complete(done);
  }
};