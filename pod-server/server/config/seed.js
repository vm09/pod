/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Delivery = require('../api/delivery/delivery.model');
var User = require('../api/user/user.model');

// Insert seed data below
var deliverySeed = require('../api/delivery/delivery.seed.json');

// Insert seed inserts below
Delivery.find({}).remove(function() {
  Delivery.create(deliverySeed);
});
