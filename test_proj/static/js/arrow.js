let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let arrow3 = document.getElementById('arrow3')
let arrow4 = document.getElementById('arrow4')
let arrow5 = document.getElementById('arrow5')
let arrow6 = document.getElementById('arrow6')
let arrow7 = document.getElementById('arrow7')
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')
let link4 = document.getElementById('link4')
let link5 = document.getElementById('link5')
let link6 = document.getElementById('link6')
let link7 = document.getElementById('link7')
let div = document.getElementById('div_div')
link1.onmouseover = function () {
    arrow1.hidden = false
}
let a = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6,arrow7]
link1.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}
link2.onmouseover = function () {
    arrow2.hidden = false
}
link2.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}
link3.onmouseover = function () {
    arrow3.hidden = false
}
link3.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}

link4.onmouseover = function () {
    arrow4.hidden = false
}
link4.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}
link5.onmouseover = function () {
    arrow5.hidden = false
}
link5.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}
link6.onmouseover = function () {
    arrow6.hidden = false
}
link6.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}
link7.onmouseover = function () {
    arrow7.hidden = false
}
link7.onmouseleave = function () {
    for (const i in a) {
        a[i].hidden = true
    }
}