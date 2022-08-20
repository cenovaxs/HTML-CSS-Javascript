var box = document.getElementById('box');
box.addEventListener('mouseover', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
}
console.log(window);

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
var concat = fruits.concat(numbers);
console.log(concat);

var person = [];
person["name"] = 'Kohn';
person["age"] = 46;
// console.log(person['age']);//46
// console.log(person.age);//46
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

todos.forEach(function (todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
});