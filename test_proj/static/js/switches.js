btn1 = document.getElementById('size+')
btn2 = document.getElementById('size-')
btn3 = document.getElementById('width+')
btn4 = document.getElementById('width-')
btn5 = document.getElementById('right')
btn6 = document.getElementById('left')
hr = document.getElementById('hr')
let def_size = 130
let def_width = 200
let def_x=0
let def_y=0

btn1.onclick = function () {
    if(def_size<10) def_size=10;
    hr.style.height = (def_size + 10) + 'px'
    def_size = def_size + 10
}
btn2.onclick = function () {
    if(def_size<10) def_size=10;
    hr.style.height = (def_size - 10) + 'px'
    def_size = def_size - 10
}
btn3.onclick = function () {
    if(def_width<10) def_width=10;
    hr.style.width = (def_width + 10) + 'px'
    def_width = def_width + 10
}
btn4.onclick = function () {
    if(def_width<10) def_width=10;
    hr.style.width = (def_width - 10) + 'px'
    def_width = def_width - 10
}
btn5.onclick=function (){
    if (def_x<0) def_x=0;
    def_x=def_x+10
    hr.style.transform='translate('+def_x+'px,0)'
}
btn6.onclick=function (){
    if (def_x<0) def_x=0;
    def_x=def_x-10
    hr.style.transform='translate('+def_x+'px,0)'
}