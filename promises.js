'use strict';
var Person = require('./person');

var person = new Person({
	username:'mjames',
	password:'123', 
	name:'mike',
	age:24,
	location:'london'
}).save()
.then(function(result){
	console.log('SAVED PERSON');
	console.log(result);
	console.log('\n');
})
.catch(function(err){
	console.log(err);
});

// Person.get('mike',function(err, person){
// 	if(err){
// 		console.log(err);
// 		console.log('error getting person');
// 		return;
// 	}

// 	person.password = '1234';

// 	person.save(function(err, person){
// 		if(err){
// 			console.log('error saving new password');
// 			return;
// 		}
// 		console.log('Updated PERSON');
// 		console.log(person);
// 		console.log('\n');

// 		person.username = 'mikejames';

// 		person.save(function(err, person){
// 			if(err){
// 				console.log('error saving new password');
// 				return;
// 			}
// 			console.log('Updated PERSON');
// 			console.log(person);
// 			console.log('\n');
// 		});

// 	});
// });