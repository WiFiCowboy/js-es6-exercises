// const getStats = (arr) => {
// 	const max = Math.max(...arr);
// 	const min = Math.min(...arr);
// 	const sum = arr.reduce((sum, r) => sum + r);
// 	const avg = sum / arr.length;
// 	return {
// 		max: max,
// 		min: min,
// 		sum: sum,
// 		avg: avg
// 	};
// };

// ES6
// const getStats = (arr) => {
// 	const max = Math.max(...arr);
// 	const min = Math.min(...arr);
// 	const sum = arr.reduce((sum, r) => sum + r);
// 	const avg = sum / arr.length;
// 	return {
// 		max,
// 		min,
// 		sum,
// 		avg
// 	};
// };

// const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

// // const stats = getStats(reviews);
// const role = 'host';
// const person = 'Jools Hollan';
// const role2 = 'director';
// const person2 = 'bob';

// // const team = {};
// // team[role] = person;
// // team[role2] = person2;
// // es6
// const team = {
// 	[role]: person,
// 	[role2]: person2
// };
// ******

// Addding methods to objects ES6
// const math = {
// 	numbers: [ 1, 2, 3, 4, 5 ],
// 	add: function(x, y) {
// 		return x + y;
// 	},
// 	multiply: function(x, y) {
// 		return x * y;
// 	}
// };
// *****
// Method Short hand
// const auth = {
// 	username: 'TommyBot',
// 	login() {
// 		console.log('logged in ');
// 	},
// 	logout() {
// 		console.log('logged out ');
// 	}
// };
// ******
// using This Methods
// function sayHi() {
// 	console.log('Hi');
// 	console.log(this);
// }

// const person = {
// 	first: 'Bob',
// 	last: 'smith',
// 	nickName: 'yo',
// 	fullName() {
// 		const { first, last, nickName } = this;
// 		return `${first} ${last} AKA ${nickName}`;
// 	},
// 	printBio() {
// 		const fullName = this.fullName();
// 		console.log(`${fullName} is a person!`);
// 	}
// };
// *****
// using this method
// const person = {
// 	first: 'Bob',
// 	last: 'smith',
// 	nickName: 'yo',
// 	fullName() {
// 		const { first, last, nickName } = this;
// 		return `${first} ${last} AKA ${nickName}`;
// 	},
// 	printBio() {
// 		const fullName = this.fullName();
// 		console.log(`${fullName} is a person!`);
// 	}
// };

// const printBio = person.printBio;

// function removeSmallest(numbers) {
// 	let newArr = [];
// 	newArr = Math.min(...numbers).numbers.shift();
// 	console.log(newArr);
// }
// *****
// Annoyomatic demo
// const annoyer = {
// 	phrases: [ 'literally', 'cray cray', "I cant't even", 'Totes!', 'YOLO', "Cant Stop, Won't Stop" ],
// 	pickPhrase() {
// 		const { phrases } = this;
// 		const idx = Math.floor(Math.random() * phrases.length);
// 		return phrases[idx];
// 	},
// 	start() {
// 		this.timerId = setInterval(() => {
// 			console.log(this.pickPhrase());
// 		}, 3000);
// 	},
// 	stop() {
// 		clearInterval(this.timerId);
// 		console.log('this is over!');
// 	}
// };
// *****
// function makeDeck() {
// 	const deck = [];
// 	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
// 	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
// 	for (let value of values.split(',')) {
// 		for (let suit of suits) {
// 			deck.push({
// 				value,
// 				suit
// 			});
// 		}
// 	}
// 	return deck;
// }

// function drawCard(deck) {
// 	return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// ******
// const myDeck = {
// 	deck: [],
// 	drawnCards: [],
// 	suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
// 	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
// 	initializeDeck() {
// 		const { suits, values, deck } = this;
// 		for (let value of values.split(',')) {
// 			for (let suit of suits) {
// 				deck.push({
// 					value,
// 					suit
// 				});
// 			}
// 		}
// 		// return deck;
// 	},
// 	drawCard() {
// 		const card = this.deck.pop();
// 		this.drawnCards.push(card);
// 		return card;
// 	},
// 	drawMultiple(numCards) {
// 		const cards = [];
// 		for (let i = 0; i < numCards; i++) {
// 			cards.push(this.drawCard());
// 		}
// 		return cards;
// 	},
// 	// phisher yates shuffle
// 	shuffle() {
// 		const { deck } = this;
// 		// loop over array backwards
// 		for (let i = deck.length - 1; i > 0; i--) {
// 			let j = Math.floor(Math.random() * (i + 1));
// 			// swap
// 			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
// 		}
// 	}
// };
// ******
// const makeDeck = () => {
// 	return {
// 		deck: [],
// 		drawnCards: [],
// 		suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
// 		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
// 		initializeDeck() {
// 			const { suits, values, deck } = this;
// 			for (let value of values.split(',')) {
// 				for (let suit of suits) {
// 					deck.push({
// 						value,
// 						suit
// 					});
// 				}
// 			}
// 			// return deck;
// 		},
// 		drawCard() {
// 			const card = this.deck.pop();
// 			this.drawnCards.push(card);
// 			return card;
// 		},
// 		drawMultiple(numCards) {
// 			const cards = [];
// 			for (let i = 0; i < numCards; i++) {
// 				cards.push(this.drawCard());
// 			}
// 			return cards;
// 		},
// 		// phisher yates shuffle
// 		shuffle() {
// 			const { deck } = this;
// 			// loop over array backwards
// 			for (let i = deck.length - 1; i > 0; i--) {
// 				let j = Math.floor(Math.random() * (i + 1));
// 				// swap
// 				[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
// 			}
// 		}
// 	};
// };

// const myDeck = makeDeck();
// myDeck.initializeDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);

// const deck2 = makeDeck();
// deck2.initializeDeck();

// *****
// Code wars stuff
function likes(names) {
	// TODO
	let likesString;
	if (!Array.isArray(names) || !names.length) {
		likesString = `no one likes this`;
	}
	for (let i = 0; i < names.length; i++) {
		if (names.length === 1) {
			likesString = `${names[i]} likes this`;
		}
		if (names.length === 2) {
			likesString = `${names[0]} and ${names[1]} like this`;
		}
		if (names.length === 3) {
			likesString = `${names[0]}, ${names[1]} and ${names[2]} like this`;
		}
		if (names.length >= 4) {
			let others = names.length - 2;
			likesString = `${names[0]}, ${names[1]} and ${others} others like this`;
		}
	}
	return likesString;
}
