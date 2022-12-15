let rectangle=document.getElementById('rectangle')
let square=document.getElementById("square")
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let x=2;
let y=1;
rectangle.onmouseover=function (){
    x=getRandomIntInclusive(0,300);
    y=getRandomIntInclusive(0,300);
    rectangle.style.transform="translate("+x+"px,"+y+"px)"
}
rectangle.onclick=function (){
    alert("Чел харош")
}
let z=0;
square.onclick=function (){
    if (z===0) {
        x=getRandomIntInclusive(200,600);
        y=getRandomIntInclusive(200,600);
        square.style.transform = "translate(" + x + "px," + y + "%) rotate(210deg)";
    }
}
