function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// async function demo() {
    let btn1=document.getElementById('btn1');
    let btn2=document.getElementById('btn2');
    btn1.onclick=function (){
    let a = parseInt(window.prompt('Значение 1'));
    let b = parseInt(window.prompt('Значение 2'));
    let c = parseInt(window.prompt('Значение 3'));
    let d = parseInt(window.prompt('Значение 4'));
    let e = parseInt(window.prompt('Значение 5'));
    let max = Math.max(Math.max(Math.max(a, b), Math.max(c, d)), e);
    alert(max);
}

    // await sleep(5000);
    btn2.onclick=function () {
        let a1 = parseInt(window.prompt('Сторона 1'));
        let b1 = parseInt(window.prompt('Сторона 2'));
        let c1 = parseInt(window.prompt('Сторона 3'));
        if (a1 + b1 > c1 && b1 + c1 > a1 && c1 + a1 > b1) {
            alert("Норм такой треугольник, ровный");
        } else {
            alert('Чет не похож он на треугольник');
        }
    }
// }


// demo();