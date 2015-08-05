'use strict';
var Person = require('./person');

Person.save({
	username:'mjames',
	password:'123', 
	name:'mike',
	age:24,
	location:'london'
})
.then(function(person){
	console.log('SAVED PERSON');
	console.log(person);
	console.log('\n');

	person.password = '1234';
	person.save()
	.then(function(person){
		console.log('Updated PERSON password');
		console.log(person);
		console.log('\n');

		person.username = 'mikejames';
		return person.save();
	})
	.then(function(person){
		console.log('Updated PERSON username');
		console.log(person);
		console.log('\n');

	});
})
.catch(function(err){
	console.log(err);
});