'use strict';
var Q = require('q');
var fs = require('fs');

var readFile = Q.nfbind(fs.readFile);
var writeFile = Q.nfbind(fs.writeFile);

var internals = {};

module.exports = internals.Person = function(options){
	this.username = options.username;
	this.password = options.password;
	this.name = options.name;
	this.age = options.age;
	this.location = options.location;
};

internals.Person.save = function(person){
	return new internals.Person(person).save();
};

internals.Person.prototype.save = function(){
	var _this = this;
	
	return new Promise(function(resolve, reject){
		
		return writeFile('./'+_this.name+'.json', JSON.stringify(_this))
		.then(function(){
			resolve(_this);
		})
		.catch(function(err){
			reject(err);
		});

	});
};

internals.Person.get = function(name, callback){
	
	return new Promise(function(resolve, reject){

		readFile('./'+name+'.json', {encoding:'utf-8'})
		.then(function(data){
			var personData;
			try{
				personData = JSON.parse(data);
			}
			catch(e){
				return reject(e);
			}
			resolve(new internals.Person(personData));
		});

	});
};