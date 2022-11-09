function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function reverse(s) {
    return s.split("").reverse().join("");
}

function summ(str) {
    let value = str,
        sum = value
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
    return sum
}

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let p = document.getElementById('p')
let p1 = document.getElementById('p1')
let c
let b
btn1.onclick = function () {
    cont = Math.floor(getRandom(100000, 999999)).toString()
    p.textContent = cont
    p.style.opacity = '1'
    str1 = cont[0] + cont[1] + cont[2]
    str2 = cont[3] + cont[4] + cont[5]
    b = summ(str1)
    c = summ(str2)
    console.log(b, c)
    if (b === c) {
        p1.textContent = "Павезло павезло"
        p1.style.opacity = '1'
        setTimeout(() => {
            p1.style.opacity = '0'
        }, 1000)
    } else {
        p1.textContent = "Непавезло непавезло"
        p1.style.opacity = '1'
        setTimeout(() => {
            p1.style.opacity = '0'
        }, 1000)
    }
}
btn2.onclick = function () {
    console.log(p.innerText)

    if (p.innerText !== '') {
        p.innerText = reverse(p.innerText)

    } else {
        p.innerText = 'Сначала сгенерируй число'
        p.style.opacity = '1'
        setTimeout(() => {
            p.style.opacity = '0'
            p.innerText = ''
        }, 1000);


    }
}