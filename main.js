
//Create a quote class and constructor function 
// 2 properties: text and autor 
// Create and instance of the quote class and store in a variable 
// 3. console log the value of the instance 
// bonus : have defualt value if text/author are not passed in





// var Iguana = function(name, color, bulgyEyes, tubbiness) {
// 	this.name = name;
// 	this.color = color;
// 	this.bulgyEyes = bulgyEyes;
// 	this.tubbiness = tubbiness; 
// 	// this.eat = function() {
// 	// 	console.log(this.name + " is eating. Om nom nom..."); 
// 	// }
// }
// var chubChub = new Iguana('ChubChub', 'Aquamarine', true, true);
// console.log(chubChub); 

// var herbert = new Iguana('Herbert', 'Brown', false, true); 
// console.log(herbert);

// Iguana.prototype.eat = function() {
// 	console.log(this.name + " is eating. yummy"); 
// }


// 	CHALLENGE
// Update Quote Class to have 2 methods on its prototype
// a. method to count the number of words in the  quote
//	b. method to console log an uppercased version of the quote with exclamation points 


// var Quote = function(text, author) {
// 	this.text = text || "Default Text" ;
// 	this.author = author || "Default Author";
// }

// var someQuote = new Quote("So long and thanks for all the fish", "Douglas Adams");
// console.log(someQuote);

// var thatQ = new Quote();
// console.log(thatQ);



// Quote.prototype.count = function() {
// 	return this.text.split(' ').length;
// }

// Quote.prototype.excite = function() {
// 	console.log(this.text.toUpperCase() + '!!!');
// }




// var numberHellos = 0; 
// var sayHi = function() {
// 	console.log('hi');
// 	numberHellos++;

// }

// var yellHi = function() {
// 	console.log("HI");
// 	numberHellos++;
// }


var PersonConstructor = function() {
	var people = []; 
	var Person = function(firstName, lastName, profession) {
		this.firstName = firstName;
		this.lastName = lastName; 
		this.profession = profession;
		people.push(this); 
	}

	Person.listPeople = function() {
		return people;
	}


	var createInfo  = function(person) {
		return person.firstName + ' is avery talented ' + person.profession + '.';
	}
	
	Person.prototype.whoDat = function() {
		return createInfo(this);
	}



	return Person;
}
var makeAPerson = PersonConstructor();
var hansel = new makeAPerson('Hansel', '[]', 'Professional Turtle Rider')
var gretel = new makeAPerson('Gretel', '[]', 'Crumb Droppah')

var makeAnotherPerson = PersonConstructor();
var hansel2 = new makeAnotherPerson('Hansel2', '[]', 'Semi-Pro Evil Bunny Rider')
var gretel2 = new makeAnotherPerson('Gretel2', '[]', 'Stick Picker-Uppah')

var someGuy = new makeAPerson('Some', 'Guy', 'Does Stuff');





