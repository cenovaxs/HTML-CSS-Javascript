var box = document.getElementById('box');
box.addEventListener('mouseover', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
}
console.log(window);