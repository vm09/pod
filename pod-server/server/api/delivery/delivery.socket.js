/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./delivery.model');

exports.register = function(socket) {
  delivery.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  delivery.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('delivery:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('delivery:remove', doc);
}
