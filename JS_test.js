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

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log(`Shop is closed`));
        }
    });
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]}`);
        await time(0000)
        console.log(`start the production`)
        await time(2000)
        console.log(`cut the fruit`)
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added `)
    }
    catch (error) {
        console.log("customer left", error)
    }
    finally {
        console.log("day ended, shop is closed")
    }
}
kitchen();