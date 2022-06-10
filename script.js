"use strict"

function myRandom() {
    let mass = []
    while (mass.length < 16) {

        let number = Math.random() * 16 + 1
        number = Math.floor(number);
        if (mass.indexOf(number) === -1) {
            // console.log(mass)
            mass.push(number);
        }
    }
    return mass
}
console.log(myRandom())

function genLi() {
    let li = document.querySelectorAll('li')
    let mass = myRandom();

    li.forEach((item, index) => {
        let red = Math.random() * 255 + 1;
        let green = Math.random() * 255 + 1;
        let blue = Math.random() * 255 + 1;
        item.style.order = mass[index]
        item.style.backgroundColor = `rgb(${red},${green}, ${blue})`
    })
}

genLi()



