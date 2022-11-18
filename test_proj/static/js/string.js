let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
btn.onclick = function () {
    let a = input1.value
    alert('Количество слов: ' + a.split(' ').filter(word => word !== '').length)

}
btn1.onclick = function () {
    let a = input1.value
    let b = input2.value.toString()
    let c = input3.value.toString()
    console.log(a, b, c)
    console.log(a.replaceAll(b, c))
    input1.value = a.replaceAll(b, c)

}
btn2.onclick = function () {
    let a = input1.value
    console.log(a.replace(/\s+/g, ' '))
    input1.value = a.replace(/\s+/g, ' ')
}