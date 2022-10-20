let a = parseInt(prompt('Значение 1'));
let b = parseInt(prompt('Значение 2'));
let c = parseInt(prompt('Значение 3'));
let d = parseInt(prompt('Значение 4'));
let e = parseInt(prompt('Значение 5'));
let max = Math.max(Math.max(Math.max(a, b), Math.max(c, d)), e);
alert(max);


await sleep(5000);
let a1 = parseInt(prompt('Сторона 1'));
let b1 = parseInt(prompt('Сторона 2'));
let c1 = parseInt(prompt('Сторона 3'));
if (a1 + b1 > c1 && b1 + c1 > a1 && c1 + a1 > b1) {
    alert("Норм такой треугольник, ровный");
} else {
    alert('Чет не похож он на треугольник');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}