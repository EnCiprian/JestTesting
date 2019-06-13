'use strict';

var World = function World(callback) {
    this.apiResponse = undefined;
    this.initializationMessage = undefined;

    callback();
}

module.exports.World = World;