
//Create a quote class and constructor function 
// 2 properties: text and autor 
// Create and instance of the quote class and store in a variable 
// 3. console log the value of the instance 
// bonus : have defualt value if text/author are not passed in

// var Quote = function(text, author) {
// 	this.text = text || "Default Text" ;
// 	this.author = author || "Default Author";
// }

// var someQuote = new Quote("So long and thanks for all the fish", "Douglas Adams");
// console.log(someQuote);

// var thatQ = new Quote();
// console.log(thatQ);




var Iguana = function(name, color, bulgyEyes, tubbiness) {
	this.name = name;
	this.color = color;
	this.bulgyEyes = bulgyEyes;
	this.tubbiness = tubbiness; 
	// this.eat = function() {
	// 	console.log(this.name + " is eating. Om nom nom..."); 
	// }
}
var chubChub = new Iguana('ChubChub', 'Aquamarine', true, true);
console.log(chubChub); 

var herbert = new Iguana('Herbert', 'Brown', false, true); 
console.log(herbert);

Iguana.prototype.eat = function() {
	console.log(this.name + " is eating. yummy"); 
}