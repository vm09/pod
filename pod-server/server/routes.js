/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/delivery', require('./api/delivery'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  

};
