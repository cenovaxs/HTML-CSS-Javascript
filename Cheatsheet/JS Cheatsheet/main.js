// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
// Alert
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World'); // tulisan muncul di konsole
console.error('This is an error'); // tulisan muncul di konsole sebagai error (x warna merah)
console.warn('This is a warning'); // tulisan muncul di konsole sebagai warn (! warna kuning)

// Prompt input
var user = prompt("Please enter your name");
alert(user);

// Confirm Box
var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z); // undefined


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5); //Hello  //ini kyk slicing di python, ambil sebagian huruf atau kata
// Split into array
val = s.split('');//'H','e','l','l,.....    //membentuk array dengan semua huruf sebagai anggotanya, ini kepakai kalau mau split string yang terpisah oleh separator contohnya: technology, IT, Sport. menjadi masing2



// ARRAYS - Store multiple values in a variable
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);

// Cara lain buat array
var courses = new Array('HTML', 'CSS', 'JS')
// cara lain buat array
var courses = new Array(3);
courses[0] = 'HTML';
courses[1] = 'CSS';
courses[2] = 'JS';
// Atau kalau mau dinamic bikin array kosong kemudian diisi :
var courses = new Array();
courses[0] = 'HTML';
courses[1] = 'CSS';
courses[2] = 'JS';

// lenght array
console.log(courses.length);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push() // value akan berada di nomor terakhir
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));//true

// // Get index
console.log(fruits.indexOf('oranges')); // sebutkan orange itu urutan ke berapa dalam array

// Concat / Join Array / gabungin 2 array
var concat = fruits.concat(courses);

// Associative Arrays
var person = [];
person["name"] = 'Kohn';
person["age"] = 46;
console.log(person['age']);//46
console.log(person.age);//46

// OBJECT LITERALS
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.name)//John
// or
console.log(person['name'])//John

// Get array value
console.log(person.hobbies[1]);//movies

// Get embedded object
console.log(person.address.city);//Boston

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);//Dinner with wife

// Math, built in method aritmatika cari info lebih lanjut di internet "math javascript"
var n = 144;
var answer = Math.sqrt(n);
console.log(Math.PI);

// Format as JSON
console.log(JSON.stringify(todos)); // ubah array todos menjadi dalam format json


// LOOPS

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);// 0,1,2,3,4,5,6,7,8,9,10
}

// While
let i = 0
while (i <= 10) {
  console.log(`While Loop Number: ${i}`); // 0,1,2,3,4,5,6,7,8,9,10
  i++;
}

// do while
var i = 20;
do {
  document.write(i + "<br />");// 20 21 22 23 24 25
  i++;
}
while (i <= 25);

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`);// Todo 1: "Take out trash" Todo 2: "Dinner with wife" Todo 3: "Meeting with boss"
}

// For...of Loop
for (let todo of todos) {
  console.log(todo.text);// Take out Trash 
  // Dinner with wife 
  // Meeting with boss
}


// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo) {
  console.log(todo.text);// Take out Trash 
  // Dinner with wife 
  // Meeting with boss
});

todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});
console.log(todoTextArray);// ["Take out Trash", "Dinner with wife", "Meeting with boss"]

// filter() - Returns array based on condition
const todo1 = todos.filter(function (todo) {
  // Return only todos where id is 1
  return todo.id === 1;
});
console.log(todo1[0].text);//Take out trash

//chained filter and map
const todo2 = todos.filter(function (todo) {
  return todo.isComplete === true;
}).map(function (todo) {
  return todo.text;
});
console.log(todo2);// ['Meeting with boss']

// CONDITIONALS

// Simple If/Else Statement
const x = 30;

if (x === 10) {
  console.log('x is 10');
} else if (x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// Switch
color = 'blue';

switch (color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:
    console.log('color is not red or blue')
}

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;



// FUNCTIONS
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(1, 4); // 5

//default value // kalau ditulis num2 = 3 maka kalau kosong bakal defaultnya jadi 3
function addNums(num1 = 5, num2 = 3) {
  console.log(num1 + num2);
}
addNums(6); // 9  // karena num2 tidak diisi dan default value num2 adalah 3

function greet(greeting = 'Hello', name) {
  if (!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}


// ARROW FUNCTIONS
const addNums = (num1 = 1, num2 = 3) => {
  return num1 + num2;
}
console.log(addNums(5));//8

// atau yang lebih ringkas tanpa curly braces dan return tapi hasilnya sama
const addNums = (num1 = 1, num2 = 3) => num1 + num2;
console.log(addNums(5));//8

// kalau mau masukin console.log ke dalam arrow function
const addNums = (num1 = 1, num2 = 3) => console.log(num1 + num2);
addNums(5);//8

//for each arrow function
todos.forEach((todo) => console.log(todo));//{id: 1, text: 'Take out trash', isComplete: false}
//{id: 2, text: 'Dinner with wife', isComplete: false}
//{id: 3, text: 'Meeting with boss', isComplete: true}

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));

// Date Object
// jalankan setelah 3 detik
function myAlert() {
  alert('Hi');
}
setInterval(myAlert, 3000);

// waktu sekarang
var d = new Date();

// ambil waktu dalam menit, bisa juga yang lain cek internet
console.log(d.getMinutes());


// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // Method (Function dalam object) contoh dibawah
  this.changeName = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
  }
  // outside method (ini bisa juga method ada diluar jadi gak ditulis di dalam sini sehingga function lain bisa pakai juga)
  this.yearofbirth = bornyear;
}
function bornyear() {
  return 2022 - this.age;
}
// prototype ini berguna agar function dapat digunakan oleh 

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.yearofbirth());


// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());


// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

contains() // method returns true if a node is a descendant of a node.
console.log(document.querySelector('Head').contains(document.querySelector('Header')))
// kalau Header adalah anak/ ada di dalam Head maka true

Array.from() // membuat array dari

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
