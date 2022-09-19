var box = document.getElementById('box');
box.addEventListener('mouseover', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
}
console.log(window);

let stocks = {
    fruits: ['pinapple', 'manggo', 'banana', 'orange'],
    liquid: ['ice', 'water'],
    holder: ['cup', 'stick', 'cone'],
    toppings: ['chocolate', 'peanuts', 'marhsmellow']
};
let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)

        }
        else reject(console.log('our shop is closed'))
    })
}
order(2000, () => console.log(`${stocks.fruits[0]}`))