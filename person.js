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
	var _this = this;
	fs.writeFile('./'+this.name+'.json', JSON.stringify(this), function(err){
		if(err){
			return callback(err);
		}

		callback(null, _this);
	});
};

internals.Person.get = function(name, callback){
	fs.readFile('./'+name+'.json', {encoding:'utf-8'}, function(err, data){
		var personData;
		try{
			personData = JSON.parse(data);
		}
		catch(e){
			return callback(e);
		}
		callback(null, new internals.Person(personData));
	});
};