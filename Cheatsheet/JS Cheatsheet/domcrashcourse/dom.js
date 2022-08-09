// EXAMINE THE DOCUMENT OBJECT

console.dir(document); // buat cek semua dom
console.log(document.domain); // 127.0.0.1    // tampilkan nama domain saja
console.log(document.URL); //http://127.0.0.1:5500/index.html?  // tampilkan URL penuh
console.log(document.title); // Item Lister   // kasih liat title html
//document.title =  123;
console.log(document.doctype); // <!DOCTYPE html>
console.log(document.head); // <head>..</head>    // tampilkan seluruh head
console.log(document.body); // <body>..</body>
console.log(document.all); // tampilin semua yang ada di dom dalam array
console.log(document.all[10]); // tampilin item yang ke 10
// document.all[10].textContent = 'Hello';
console.log(document.forms[0]); // tampilin forms dalam hal ini yang pertama
console.log(document.links); // tampilin links
console.log(document.images); // tampilin images

// GETELEMENTBYID 
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title'); // dimasukkan jadi variable biar mudah lebih pendek
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello'; // .textContent nampilkan text sesuai dengan isi .html
headerTitle.innerText = 'Goodbye'; // .innerText nampilin text sesuai dengan tampilan akhir
console.log(headerTitle.innerText); // untuk menulis isi text ke dalam console
headerTitle.innerHTML = '<h3>Hello</h3>'; // mengganti tulisan dengan <h3>Hello</h3> sebenarnya bukan mengganti tetapi memasukkan di dalam H1
header.style.borderBottom = 'solid 3px #000'; // ganti ukuran border bawah

// GETELEMENTSBYCLASSNAME 
var items = document.getElementsByClassName('list-group-item'); // pilih berdasarkan class
console.log(items); // [li.list-group-item,li.list-group-item, li.list-group-item, li.list-group-item] __proto__: HTML Collection
console.log(items[1]); // <li class="list-group-item">Item 2</li>
items[1].textContent = 'Hello 2'; // ganti content Item 2 menjadi hello 2
items[1].style.fontWeight = 'bold'; // membuat jadi bold
items[1].style.backgroundColor = 'yellow'; // ganti warna backround

// Gives error 
//items.style.backgroundColor = '#f4f4f4';  
// diatas ini gak bisa karena bentuknya array html collection harus di loop satu persatu seperti dibawah:
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}

// GETELEMENTSBYTAGNAME // ambil berdasarkan nama tag html (<p>, <a>, <div>, <span>, <H1>, <Body>, <Ul> dll)
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World' // mengisi input dengan 'Hello World'

var submit = document.querySelector('input[type="submit"]'); // memilih tombol submit 
submit.value = "SEND" // tulisan tombol submit diganti dengan "Send"

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; // hanya merubah warna item pertama dalam class tersebut

var lastItem = document.querySelector('.list-group-item:last-child'); // memilih item terakhir dalam class
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)'); // memilih item ke (2), kalau mau pilih keberapa tinggal ganti angkanya
secondItem.style.color = 'coral';

QUERYSELECTORALL //
var titles = document.querySelectorAll('.title'); // pilih semua yang serupa dan dijadikan array

console.log(titles);
titles[0].textContent = 'Hello'; // untuk memanggilnya harus pakai titles[0] karen titles dalam bentuk array

var odd = document.querySelectorAll('li:nth-child(odd)'); // pilih yang ganjil
var even = document.querySelectorAll('li:nth-child(even)'); // pilih yang genap

// membuat yang ganjil jadi abu muda dan genap jadi abu tua
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}



// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode  // menargetkan satu level diatas node dari pilihan
console.log(itemList.parentNode); // <div id="main" class ="card card-body">...</div>     //menargetkan parent node dari #items yaitu div dengan #main
itemList.parentNode.style.backgroundColor = '#f4f4f4'; // <div id="main" class ="card card-body" style="background-color : rgb(244,244,244);">...</div> 
console.log(itemList.parentNode.parentNode.parentNode); // <body>...</body>

// parentElement // sama dengan parent Node
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes // tidak direkomendasikan sebaiknya gunakan children karena text kosong jadi list kalau ada line break dll
console.log(itemList.childNodes);
// children // memilih satu level dibawah
console.log(itemList.children);
console.log(itemList.children[1]); // memilih item kedua dari children
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild // tidak direkomendasikan
console.log(itemList.firstChild);
// firstElementChild // memilih anak pertama
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


// lastChild  // tidak direkomendasikan
console.log(itemList.lastChild);
// lastElementChild // memilih anak terakhir
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling // tidak direkomendasikan
console.log(itemList.nextSibling);
// nextElementSibling // pilih elemen lain yang seingkat
console.log(itemList.nextElementSibling);

// previousSibling // tidak direkomendasikan
console.log(itemList.previousSibling);
// previousElementSibling // pilih elemen lain yang setingkat
console.log(itemList.previousElementSibling); itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

EVENTS //

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  //console.log('Button clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  //console.log(e);

  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';

  // console.log(e.type);

  //console.log(e.clientX);
  //console.log(e.clientY);

  //console.log(e.offsetX);
  //console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log('EVENT TYPE: ' + e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}