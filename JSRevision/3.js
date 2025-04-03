/*
1)
function getResult(value) {
if (value > 4) {
return 10;
} else {
return 20;
}
}
var result = getResult(3);

OUTPUT : 20;


2)
function getResult(value) {
if (value.length < 4) {
return 'short';
} else {
return 'long';
}
}
var result = getResult('hello');

OUTPUT : long


3)
}
function getResult(bool1, bool2) {
return bool1 || bool2 ? 'one or more' : 'neither';
var result = getResult(true, false);


OUTPUT : true


4)
function getResult(arr) {
if (arr.length) {
return 'full';
} else {
return 'empty';
}
}
var result = getResult([1, 2, 3]);

OUTPUT: full

5)
function getResult(value) {
return value === 10 ? 'ten' : 'not ten';
}
var result = getResult(9);

OUTPUT: not ten

6)
function getResult(value) {
return typeof value === 'number' ? 'numeric' : 'other';
}
var result = getResult('10'); 

OUTPUT: other
7)
function getSum(values) {
var sum = 0;
for (var i = 0; i < values.length; i++) {
sum += values[i];
}
return sum;
function getAverage(values) {
return getSum(values) / values.length;
}
}
result = getAverage([1, 2, 3]);

OUTPUT: 2 (Syntax error)

8)
var nonNumericCards = {
1: 'Ace'
,
11: 'Jack'
,
12: 'Queen'
13: 'King'
,
};
var suits = ['Hearts'
,
'Clubs'
,
'Spades'
,
'Diamonds'];
var pack = [];
for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
var suit = suits[suitIndex];
for (var number = 1; number < 14; number++) {
var value = nonNumericCards[number] || number;
pack.push(value + ' of ' + suit);
}
}
var result = pack[0];

OUTPUT: Ace of hearts

9)
var person1 = {
name: 'Bob'
,
dateOfBirth: '1973-01-03'
};
var person2 = {
name: 'Bob'
,
dateOfBirth: '1982-01-03'
};
function sameDateAndMonth(date1, date2) {
var sameMonth = date1.getMonth() == date2.getMonth();
var sameDate = date1.getDate() == date2.getDate();
return sameMonth && sameDate;
}
function haveSameBirthday(person1, person2) {
var date1 = new Date(person1.dateOfBirth);
var date2 = new Date(person2.dateOfBirth);
return sameDateAndMonth(date1, date2);
}
var result = haveSameBirthday(person1, person2);

OUTPUT: true

10) --------------------------------
function add12Hours(time) {
var hourMinute = time.split(':');
return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1];
}
function to24HourTime(time) {
var parts = time.split(' ');
if (parts[1] === 'AM') {
return parts[0];
}
return add12Hours(parts[0]);
}
var result = to24HourTime('7:30 PM');

OUTPUT: 

11)
var numberArray = new Array(10);
for (var i = 0; i < numberArray.length; i++) {
numberArray[i] = i * 3;
}
var result = numberArray[8];

OUTPUT: 24

12)
var string = '0123456789';
var newString = '';
for (var i = 0; i < string.length; i++) {
var char = string.charAt(i);
newString += char + char;
}
var result = newString.length;

OUTPUT: 20

13)
var score = 10;
function doubleScore() {
score = score * 2;
}
doubleScore();
var result = score;

14)
var users = [
{ username: 'amy'
{ username: 'bob'
{ username: 'helen'
{ username: 'amir'
{ username: 'carmen'
, admin: true },
, admin: false },
, admin: true },
, admin: false },
, admin: false }
];
function countAdmins(userArr) {
var count = 0;
for (var i = 0; i < userArr.length; i++) {
if (userArr[i].admin) {
count = count + 1;
}
}
return count;
}
var result = countAdmins(users);

OUTPUT: 2

15)
var users = [];
function addUser(users, newUser) {
return [].concat(users, newUser);
}
users = addUser(users,
users = addUser(users,
users = addUser(users,
users = addUser(users,
'bob');
'amy');
'will');
'lin');
var result = users.length;

OUTPUT: 4

16)
var list = [1, 2, 3];
function doubleItems(input) {
for (var i = 0; i < input.length; i += 1) {
input[i] = input[i] * 2;
}
}
doubleItems(list);
var result = list[1];

OUTPUT: 4

17)
var animal = {
name: 'Snuffles'
type: 'DOG'
,
};
function rename(input, newName) {
input.name = newName;
}
rename(animal,
'Snowball');
var result = animal.name;

OUTPUT: snowball

18)
function calculateMagnitude(vector) {
var magnitudeSquared = (vector.x * vector.x) + (vector.y * vector.y);
var magnitude = Math.sqrt(magnitudeSquared);
vector.magnitude = magnitude;
}
var vector = { x: 3, y: 4 };
calculateMagnitude(vector);
var result = vector.magnitude;
19)
function getSalutation(title, firstName, lastName) {
var salutation;
if (!title) {
salutation = firstName + ' ' + lastName;
} else {
salutation = title + ' ' + lastName;
}
return salutation;
}
var result = getSalutation('Miss'
,
'Jane'
,
'Marple');

OUTPUT: Miss Marple
20)
function getLogin(user) {
var login;
if (!user.admin) {
login = user.email;
} else {
login = user.username;
}
return login;
}
var user = {
username: 'jane'
,
admin: true,
email: 'jane@example.com'
};
var result = getLogin(user);

OUTPUT: jane

21)
function canLegallyDrink(age) {
var legal = age >= 18;
if (legal) {
return 'yes';
} else {
return 'no';
}
}
var result = canLegallyDrink(14);

OUTPUT: no

22)
function containsCarbon(compound) {
if (compound.indexOf('C') === -1) {
return 'no';
} else {
return 'yes';
}
}
var result = containsCarbon('H2O');

OUTPUT: no

23)
var totalPokemon = 150;
function caughtThemAll(numPokemon) {
if (numPokemon !== totalPokemon) {
return 'gotta catch them all';
} else {
return 'caught them all';
}
}
var result = caughtThemAll(102);

OUTPUT: gotta catch them all

24)
function isMeaningOfLife(num) {
if (num === 42) {
return 'yes';
} else {
return 'no';
}
}
var result = isMeaningOfLife(41);

OUTPUT: no

25)
var fruits = ['Banana'
,
'Pear'
,
'Apple'
,
'Mango'];
var sorted = fruits.sort(function(string1, string2) {
return string1.length - string2.length;
});
var result = sorted[0];

OUTPUT: pear

26)
var users = [
{ username: 'amy'
{ username: 'bob'
{ username: 'helen'
{ username: 'amir'
{ username: 'carmen'
, admin: false },
, admin: true },
, admin: true },
, admin: false },
, admin: false }
function isAdmin(user) {
return user.admin;
];
}
var admins = users.filter(isAdmin);
var result = admins[0].username;
27)
function getInitials(sentence) {
var words = sentence.toLowerCase().split(' ');
var initials = words.map(function(word) {
return word.charAt(0);
});
return initials.join('');
}
var result = getInitials('Fly me to the moon');
28)
var itemsForSale = [
{ name: 'cheese'
, price: 3 },
{ name: 'tv'
, price: 300 },
{ name: 'socks'
, price: 2 },
{ name: 'soft toy'
, price: 7 },
{ name: 'fridge'
, price: 120 }
function formatPrice(item) {
item.price = '£' + item.price + '
return item;
.00';
];
}
var formattedItemsForSale = itemsForSale.map(formatPrice);
var result = formattedItemsForSale[2].price;
29)
var everything = ['awesome'
,
'awesome'
,
'awesome'];
function isAwesome(item) {
return item === 'awesome';
}
var result = everything.filter(isAwesome).length === everything.length;
30)
var names = ['amy'
,
'bob'
,
'helen'
,
'amir'
,
'carmen'];
var namesContainingA = names.filter(function(name) {
return name.indexOf('a') >= 0;
});
var result = namesContainingA.length;
31)
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split(''); // ['a'
,
'b'
, ..]
function letterForNumber(input) {
if (input < 1 || input > 26) {
return '
-
';
}
return lettersArray[input - 1];
}
var result = letterForNumber(3);
32)
function asPercentage(value, total) {
if (total === 0) {
return 0;
}
return (value / total) * 100;
}
var result = asPercentage(20, 40);
33)
function isVegetable(food) {
var answer;
if (food === 'potato') {
answer = 'yes';
} else if (food === 'tomato') {
answer = 'no';
} else {
answer = 'maybe';
}
return answer;
}
var result = isVegetable('tomato');
34)
function getEmotion(happinessLevel) {
var emotion;
if (happinessLevel < 5) {
emotion = ':(';
} else if (happinessLevel === 5) {
emotion = ':|';
} else {
emotion = ':)';
}
return emotion;
}
var result = getEmotion(7);
35)
function canLegallyDrink(age) {
if (age >= 18) {
return 'legal';
} else {
return 'illegal';
}
}
var result = canLegallyDrink(25);
36)
function containsCarbon(compound) {
if (compound.indexOf('C') !== -1) {
return 'yes';
}
return 'no';
}
var result = containsCarbon('CO2');
37)
function canDrink(drinkerAge, drinkIsAlcoholic) {
var underAge = drinkerAge < 18;
return !underAge || !drinkIsAlcoholic;
}
var result = canDrink(21, true);
38)
function withinRange(value, start, end) {
var beforeStart = value < start;
var afterEnd = value > end;
return !beforeStart && !afterEnd;
}
var result = withinRange(10, 4, 20);
39)
function isNotADuck(quacksLikeADuck, walksLikeADuck) {
return !(quacksLikeADuck && walksLikeADuck);
}
var result = isNotADuck(true, false);
40)
function differentNamesAndValues(input1, input2) {
return !(input1.name === input2.name || input1.value === input2.value);
}
var object1 = { name: 'bob'
var object2 = { name: 'bob'
, value: 3 };
, value: 4 };
var result = differentNamesAndValues(object1, object2);
41)
function isValidPassword(input) {
var containsLetter = /[a-z]/.test(input);
var containsNumber = /[0-9]/.test(input);
var isLongEnough = input.length >= 8;
if (!containsLetter || !containsNumber || !isLongEnough) {
return false;
}
return true;
}
var result = isValidPassword('pass9');
42)
var you = {
happy: true,
knowsIt: false
};
function shouldClapHands(person) {
if (!(person.happy && person.knowsIt)) {
return false;
}
return true;
}
var result = shouldClapHands(you);
43)
function processStr(str) {
return str
.split('')
.sort()
.join('');
}
var result = processStr('made');
44)
function getSquare(value) {
return value * value;
}
var result = getSquare(3);
45)
var MAX
LENGTH = 5;
_
function checkStr(value) {
return value && value.length <= MAX
LENGTH;
_
}
var result = checkStr('pineapple');
46)
function processArray(values) {
var sum = 0;
for (var i = 0; i < values.length; i++) {
sum += values[i];
}
return sum;
}
var result = processArray([1, 2, 3, 4]);
47)
var itemsForSale = {
cheese: {
price: {
normal: 3,
reduced: 1.5
}
},
tv: {
price: {
normal: 300,
reduced: 150
}
}
function getNormalPrice(item) {
return itemsForSale[item].price.normal;
};
}
var result = getNormalPrice('cheese');
48)
var vowels = ['a'
,
'e'
,
'i'
,
'o'
,
'u'];
function countVowels(inputString) {
var count = 0;
for (var i = 0; i < inputString.length; i += 1) {
var character = inputString.charAt(i);
if (vowels.indexOf(character) !== -1) {
count += 1;
}
}
return count;
}
var result = countVowels('boolean');
49)
function sort(input) {
var lowerCase = input.toLowerCase();
var lettersArray = lowerCase.split('');
var sorted = lettersArray.sort();
return sorted.join('');
}
var result = sort('bag');
var result = sentenceCase('the right answer');
50)
}
51)
function sentenceCase(input) {
return input.charAt(0).toUpperCase() + input.slice(1, input.length);
var list = ['a'
,
'b'
,
'b'
,
'c'
,
'a'];
function keepDuplicates(value, index) {
return index !== list.indexOf(value) || index !== list.lastIndexOf(value);
function capitalize(item) {
return item.toUpperCase();
}
}
var duplicates = list.filter(keepDuplicates);
var capitalizedDuplicates = duplicates.map(capitalize);
var result = capitalizedDuplicates[1];
52)
function reverse(sentence) {
return sentence
.split(' ')
.reverse()
.join(' ');
}
var sentence = 'Hello world!';
var result = reverse(sentence);
53)
function getMultiples(str) {
var digits = str.split('');
var digitsDiv3 = digits.map(function(number) {
return number / 3;
});
var wholeNumbers = digitsDiv3.filter(function(number) {
return number.toString().indexOf('
.
') === -1;
});
var multiplesOf3 = wholeNumbers.map(function(number) {
return number * 3;
});
return multiplesOf3;
}
var result = getMultiples('0123456789')[2];
54)
function getLetterCounts(stringInput) {
return stringInput.split('').reduce(function(counts, letter) {
if (counts[letter]) {
counts[letter] += 1;
} else {
counts[letter] = 1;
}
return counts;
}, {});
}
var result = getLetterCounts('aaabbcccc').c;
55)
function getDateDifference(earlier, later) {
return (later - earlier) / (1000 * 3600 * 24);
}
var startDate = new Date('2017-01-01');
var endDate = new Date('2017-01-07');
var result = getDateDifference(startDate, endDate);
56)
function isNumber(value) {
// check for NaN, as NaN is of type 'number'
return typeof value === 'number' && !isNaN(value);
}
var result = isNumber('58');
57)
function getVectorMagnitude(x, y) {
// Magnitude of a vector is defined by
// M^2 = x^2 + y^2
var magnitudeSquared = x * x + y * y;
return Math.sqrt(magnitudeSquared);
}
var result = getVectorMagnitude(3, 4);
58)
function doRangesOverlap(range1, range2) {
return range1.min <= range2.max && range1.max >= range2.min;
}
var firstRange = { min: 3, max: 7 };
var secondRange = { min: 6, max: 10 };
var result = doRangesOverlap(firstRange, secondRange);
59)
var list = ['rock'
,
'paper'
,
'hard place'
,
'scissors'];
function isInTrouble(item) {
var index = list.indexOf(item);
return index > list.indexOf('rock') && index < list.indexOf('hard place');
}
var result = isInTrouble('paper');
60)
var animalSoundMap = {
sheep: 'baa'
,
cat: 'meow'
,
cow: 'moo'
,
fox: 'ring-ding-ding-ding-ding-ring-ding'
};
function getAnimalSound(animal) {
var sound = animalSoundMap[animal];
if (sound) {
return sound;
}
// We assume that animals without an explicit sound, make a 'woof' sound
return 'woof';
}
var result = getAnimalSound('elephant');
61)
var fixedCost = 200;
var monthlyCost = 20;
var result = fixedCost + monthlyCost * 12;
62)
var result = (true && true) || (true && false);
63)
function isTeenager(age) {
return age < 20 && age > 12;
}
var result = isTeenager(14);
64)
var taxRate = 0.2;
var salary = 100;
var bonus = 10;
var result = salary - salary * taxRate + bonus;
65)
function prefixString(prefix, value) {
return (prefix || '$') + value;
}
var result = prefixString(null,
'1,000');
66)
var employees = 10;
var employeeTurnover = 0.9;
var applications = 3;
var result = applications + (employees * employeeTurnover);

 */