'use strict'

const Backbone = require('backbone');
const TempModel = require('./TempModel.js');

module.exports = Backbone.Collection.extend({
    model: TempModel
});