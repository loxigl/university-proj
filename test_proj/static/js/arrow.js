let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let arrow3 = document.getElementById('arrow3')
let arrow4 = document.getElementById('arrow4')
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')
let link4 = document.getElementById('link4')
let div = document.getElementById('div_div')
link1.onmouseover = function () {
    arrow1.hidden = false
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = true
}
link1.onmouseleave = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = true
}
link2.onmouseover = function () {
    arrow1.hidden = true
    arrow2.hidden = false
    arrow3.hidden = true
    arrow4.hidden = true
}
link2.onmouseleave = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = true
}
link3.onmouseover = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = false
    arrow4.hidden = true
}
link3.onmouseleave = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = true
}
link4.onmouseover = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = false
}
link4.onmouseleave = function () {
    arrow1.hidden = true
    arrow2.hidden = true
    arrow3.hidden = true
    arrow4.hidden = true
}
alert("bruh")