var students =[{name: 'Liz', age: 25, city: 'Boulder'}, {name: 'Meghan', age: 27, city: 'Denver'}, {name: 'Trent', age: 32, city: 'Boulder'}, {name: 'Chelsea', age: 24, city: 'Denver'}]





for (var i = 0; i < students.length; i++) {
	console.log(students[i].name);
}

for (var i = 0; i < students.length; i++) {
	console.log(students[i].age)
}

for (var i = 0; i < students.length; i++) {
	console.log(students[i].city)
}

for (var i = 0; i < students.length; i++) {
	if(students.city ==='Boulder') {
		console.log(students.name && students.city)
	}
}

for (var i = 0; i < students.length; i++) {
	if(students.age > 25) {
		console.log(students.name)
	}
}