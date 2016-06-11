'use strict'

const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: function () {
        return {
            UniqueId: Math.random().toString(16).slice(2),
            Title: 'TempModel'
        };
    }
});