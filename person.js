'use strict';
var fs = require('fs');

var internals = {};

module.exports = internals.Person = function(options){
	this.username = options.username;
	this.password = options.password;
	this.name = options.name;
	this.age = options.age;
	this.location = options.location;
};

internals.Person.save = function(person, callback){
	return new internals.Person(person).save(callback);
};

internals.Person.prototype.save = function(callback){
	fs.writeFile('./'+this.name+'.json', JSON.stringify(this), callback);
};