'use strict';

var Person = require('./person');

Person.save({
	username:'mjames',
	password:'123', 
	name:'mike',
	age:24,
	location:'london'
},function(err, result){
	if(err){
		console.log('error saving person');
		return;
	}
	console.log(result);
});