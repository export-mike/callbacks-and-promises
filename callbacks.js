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
	console.log('SAVED PERSON');
	console.log(result);
	console.log('\n');
});

Person.get('mike',function(err, person){
	if(err){
		console.log(err);
		console.log('error getting person');
		return;
	}

	person.password = '1234';

	person.save(function(err, person){
		if(err){
			console.log('error saving new password');
			return;
		}
		console.log('Updated PERSON');
		console.log(person);
		console.log('\n');

		person.username = 'mikejames';

		person.save(function(err, person){
			if(err){
				console.log('error saving new password');
				return;
			}
			console.log('Updated PERSON');
			console.log(person);
			console.log('\n');
		});

	});
});