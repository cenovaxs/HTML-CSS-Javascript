// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //


// untuk cek object punya method apa saja :
// console.log(object.prototype)
// contoh:
console.log(Array.prototype);
console.log(Object.prototype);
console.log(Number.prototype);

// LOGGING OUTPUT
// Alert
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World'); // tulisan muncul di konsole
console.error('This is an error'); // tulisan muncul di konsole sebagai error (x warna merah)
console.warn('This is a warning'); // tulisan muncul di konsole sebagai warn (! warna kuning)
console.table(todos) // tulisan muncul di konsole dalam bentuk tabel

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

// Kalau kita langsung longkap
courses[6] = 'Python'
// maka akan ada 3 undefined di courses[3],courses[4],courses[5]

// membuang isi dari array adalah dgn undefined karena undefined = kosong dalam javascript
courses[0] = undefined

// lenght array
console.log(courses.length);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Join // mengubah array menjadi string
fruits.join(); //apples,oranges,pears,grapes   // secara default menggunakan koma
fruits.join('-'); //apples-oranges-pears-grapes     //bisa diganti separator sesuai keinginan

// Add value using push() // value akan berada di akhir array
fruits.push('strawberries');
fruits.push('strawberries', 'bananas');// untuk menambahkan multiple

// Add to beginning
fruits.unshift('mangos');

// Remove first value
fruits.unshift();// mangos hilang

// Remove last value
fruits.pop();

// Splice // buat hapus atau nambah ditengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
fruits.splice(2, 1, "durian", "papaya");

// Slice // buat ambil sebagian array dan buat menjadi array baru
// slice(indexAwal,indexAkhir);
var fruits2 = fruits.slice(1, 3);// mengambil index 1 sampai 2, index akhir tidak diambil

// Check if array
console.log(Array.isArray(fruits));//true

// Get index
console.log(fruits.indexOf('oranges')); // sebutkan orange itu urutan ke berapa dalam array

// Concat / Join Array / gabungin 2 array
var concat = fruits.concat(courses);

// Spread operator cara lain untuk memanipulasi array

let mhs = ['Luna', 'Lina', 'Lion']
console.log(...mhs); // Luna Lina Lion
console.log(...mhs[0]); // L u n a
let orang = ['Dread', 'Drovi', 'Davi']
console.log([...mhs, ...orang])// ['Luna', 'Lina', 'Lion', 'Dread','Drovi','Davi'] // kyk concat
console.log([...mhs, 'Ajis', ...orang]) // ['Luna', 'Lina', 'Lion', 'Ajis', 'Dread','Drovi','Davi'] bedanya ini lebih mudah dalam mengeditnya
let mhs1 = [...mhs] // dengan ini apabila kita mengganti mhs1 tidak mengganggu mhs

// Destructuring assignment ( bisa dicek youtube javascript lanjutan https://youtu.be/7f11bDxZSP0)
// untuk mengassign variable dengan nama pilihan
let [nama, , telp] = ['sandi', 'Jl kecubung', 08988555222]; // kalau mau skip bisa kasih koma kosong
console.log(nama);// 'sandi'
console.log(telp);// 08988555222

// bisa swap items

let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(b)// 1

// return value pada function
function coba() {
  return [1, 2];
}
let [a, b] = coba();
console.log(b)// 2

// Rest parameter
// gunakan []
let [a, ...values] = [1, 2, 3, 4, 5] // sisanya masuk ke parameter values sebagai array
console.log(a);// 1
console.log(values)// [2,3,4,5]

// menggunakan {}
let { nama, umur } = {// argument {nama,umur} harus sama dengan property nama: umur: gak boleh asal
  nama: "Dika",
  umur: 33
};
console.log(umur);// 33
// ATAU tanpa let pakai ()
({ nama, umur } = {// argument {nama,umur} harus sama dengan property nama: umur: gak boleh asal
  nama: "Dika",
  umur: 33
});
console.log(umur);// 33

// Assign ke variable baru
let mhs = {
  nama: 'Sandhika Galih',
  umur: 33
};

let { nama: n, umur: u } = mhs;
console.log(n, u)// Sandhika Galih 33
console.log(nama)// error karena variabel sudah diganti ke n
// default value
let mhs = {
  nama: 'Sandhika Galih',
  umur: 33 // email sengaja tidak di define
};

let { nama, umur, email = 'google.com' } = mhs; // kalau email tidak didefine maka akan default value
console.log(email)// google.com

// bisa digabungkan assign variable dan default value

let mhs = {
  nama: 'Sandhika Galih',
  umur: 33
};

let { nama: n, umur: u, email: e = 'google.com' } = mhs;
console.log(e)// google.com

// contoh nyata 
// Mengambil field pada object , setelah dikirim sebagai parameter untuk function
let mhs = {
  id: 123,
  nama: "Sandi",
  umur: 33
}

function getid({ id }) { // ini bakal langsung mengambil id saja
  return id;
}
console.log(getid(mhs)); // 123

// Destructuring Function
// menamai bagian dari fungsi
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / c];
}
let [tambah, kurang, kali, bagi = "tidak ada" /* yang tidak ada itu default value */] = kalkulasi(2, 3);
console.log(bagi)//0.66666666

// contoh kalau ngak mau pakai Destructuring
let tambah = kalkulasi(3, 4)[0];
let kurang = kalkulasi(3, 4)[1];

// bisa juga menggunakan object {}
function kalkulasi(a, b) {
  return { tambah: a + b, kurang: a - b, kali: a * b, bagi: a / c };
}
let { kurang, tambah, bagi, kali }/* bedanya sama array [] kalau object {} dia gak harus urut*/ = kalkulasi(2, 3);
console.log(bagi)//0.66666666

// contoh lain destructuring arguments
let mhs1 = {
  nama: "Sandhika",
  umur: 33,
  nilai: {
    tugas: 80,
    uts: 90,
    uas: 100
  }
};
function cetakmhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama} umur saya ${umur}, nilai uas saya ${uas}`
};
console.log(cetakmhs(mhs1));//

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

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]); // {name: "Company one", category : "Finance", start : 1992, end : 2004} {name:.......}..... loop dari awal sampai akhir
}

// forEach() - Loops through array
// format: 
// <Array>.forEach(function(<panggil_satuan>,<panggil_iterator>,<panggil_seluruh_Array>){perintah})

// Contoh:

todos.forEach(function (todo) {
  console.log(todo.text);// Take out Trash 
  // Dinner with wife 
  // Meeting with boss
});

todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);// 1 Take out Trash, 2 Dinner with wife, 3 Meeting with boss
  console.log(myTodos);// 0: {id: 1, text: 'Take out trash', isComplete: false} 1: {id: 2, text: 'Dinner with wife', isComplete: false} 2: {id: 3, text: 'Meeting with boss', isComplete: true} Array
  length: 3
});

// map() - Loop through and create new array
// kayak for each tapi bedanya hasilnya langsung jadi Array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});
console.log(todoTextArray);// ["Take out Trash", "Dinner with wife", "Meeting with boss"]

// contoh map arrow function:
// contoh bikin akar dari ages
const ageakar = ages.map(age => Math.sqrt(age));
console.log(ageakar);
// contoh bikin doble dari ages
const agedouble = ages.map(age => age * 2);
console.log(agedouble);

// contoh map dari map // akar dari ages dikali dua
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);


// filter() - Returns array based on condition
// format:
// <array>.filter(<parameter>, <index>, <wholearray>) => <parameter>.<category> === <'Retail'>);

// mensortir umur 21 ke atas:
// cara biasa tanpa filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);//[33, 54, 21, 44, 61, 45, 25, 64, 32]
// atau menggunakan filter cara 1
const canDrink = ages.filter(function (age) {
  return age >= 21;
})
console.log(canDrink);//[33, 54, 21, 44, 61, 45, 25, 64, 32]
// atau menggunakan filter cara 2
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
})
console.log(canDrink);//[33, 54, 21, 44, 61, 45, 25, 64, 32]
// atau arrow function
const canDrink = ages.filter(age => age >= 21); // kalau parameter filter cuma satu maka tidak perlu (age) => age....
console.log(canDrink);//[33, 54, 21, 44, 61, 45, 25, 64, 32]

// contoh lain 
// choose company retail only
const companyRetail = companies.filter(retail => retail.category === 'Retail');
console.log(companyRetail);

// contoh lain menggunakan 2 if condition

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

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

// find   // kyk filter tapi berhenti di kalau true
const canDrink = ages.find(function (age) {
  return age >= 21;
})
console.log(canDrink);//33

// Sort 
// mengurutkan dan hasilnya dijadikan array
// Sort companies by start year

const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies)// [...]   // array dengan isinya Companies yang diurutkan berdasarkan tahun berdirinya
// atau pendeknya:
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// penjelasan ternery operator: ? = return,  : = else

const sortAges = ages.sort();
console.log(sortAges);// Ini langsung sort tapi hanya melihat angka pertamanya, jadi angka 2 itu ditaroh setelah 19
// solusinya:
const sortAges = ages.sort((a, b => a - b));
console.log(sortAges);// sort dengan sempurna
// kalau mau sebaliknya
const sortAges = ages.sort((a, b => b - a));
console.log(sortAges);// dibalik dari besar ke kecil

// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
};
console.log(ageSum);//460  // jumlah seluruh Array
// atau bisa juga pakai reduce
const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(ageSum);//460  // jumlah seluruh Array

// atau yang pendek reduce + arrow function
const ageSum = ages.reduce((total, age) => total + age, 0);//460  // jumlah seluruh Array

// Contoh lainnya
const totalYears = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);//118   // jumlah umur perusahaan 
// atau
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);//118   // jumlah umur perusahaan 

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);//798

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
// Function Declaration
function namafunction(argument1, argument2) {
  alert(`${argument1} dan ${argument2}`);
};

namafunction(tes, lagi);

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

// Arguments // cek youtube web programming unpas tentang Execution context, Hoisting & Scope menit 22:10z  

// Function Expression
let = panggilfunction = function (argument1, argument2) {
  alert(`${argument1} dan ${argument2}`);
};


// ARROW FUNCTIONS
// arrow functions tidak bisa digunakan dalam Constructor 
// kalau argumen hanya satu maka tidak membutuhkan parentheses contoh (num => num*2)
// kalau argumen tidak ada maka harus pakai parentheses kosong contoh () => 4+6
const addNums = (num1 = 1, num2 = 3) => {
  return num1 + num2;
}
console.log(addNums(5));//8

// Implicit Return atau yang lebih ringkas tanpa curly braces dan return tapi hasilnya sama
const addNums = (num1 = 1, num2 = 3) => num1 + num2;
console.log(addNums(5));//8

// kalau mau masukin console.log ke dalam arrow function
const addNums = (num1 = 1, num2 = 3) => console.log(num1 + num2);
addNums(5);//8

// for each arrow function
todos.forEach((todo) => console.log(todo));//{id: 1, text: 'Take out trash', isComplete: false}
//{id: 2, text: 'Dinner with wife', isComplete: false}
//{id: 3, text: 'Meeting with boss', isComplete: true}

// Map arrow function
let anothertodo = todos.map(
  nama => ({ kegiatan: nama.id, rincian: nama.text }) // untuk membuat hasil dalam bentuk array {} harus ditutup dengan () karena kalau tidak arrow function akan mengira kita mau buat function 
);
console.log(anothertodo);

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


// Kalau variabel dan nama sama maka tidak perlu buat nama: nama, cukup dengan nama saja seperti dibawah
let anothertodo = todos.map(
  nama => ({ nama, rincian: nama.text })
);
console.table(anothertodo);

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
// function declaration // cara lama
function mahasiswa(nama, NIP) {
  var mhs = {};
  mhs.nama = nama;
  mhs.NIP = NIP;
  return mhs;
};
var siswa1 = mahasiswa('Putri', 231421566);
console.log(siswa1);//{nama: 'Putri, NIP : 231421566}

// Object Literal

function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodmahasiswa); // dengan Object.create() maka method bisa diluar function Mahasiswa tanpa harus dipropertikan di dalam function, jadi tidak dipanggil berulang2 (lebih efektif)
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  // method bisa disini tapi dalam hal ini methodnya diluar
  return mahasiswa;
}
const methodmahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Halo ${this.nama}, good night!`);
  }
  belajar: function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat belajar!`);
  }
}



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

// Prototype buka youtube sandika galih tentang prototype kalau lupa
// prototype digunakan supaya function yang tidak diperlukan tidak muncul setiap function Person dipanggil karena mungkin gak diperlukan dan malah membocorkan data yang tidak diperlukan
// Di ES6 Prototype digantikan oleh Classes

// Get Birth Year Prototype  
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name Prototype
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
// Classes di ES6 menggantikan function objek dan prototype di ES5
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

// DOM sebaiknya buka DOM.js buat yang lebih detail disini cuma summary aja
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
// contoh:
console.log(document.querySelector('Head').contains(document.querySelector('Header')))
// kalau Header adalah anak/ ada di dalam Head maka true

Array.from() // membuat array dari

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
