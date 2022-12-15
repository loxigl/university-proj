let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let arrow3 = document.getElementById('arrow3')
let arrow4 = document.getElementById('arrow4')
let arrow5 = document.getElementById('arrow5')
let arrow6 = document.getElementById('arrow6')
let arrow7 = document.getElementById('arrow7')
let arrow8 = document.getElementById('arrow8')
let arrow9 = document.getElementById('arrow9')
let arrow10 = document.getElementById('arrow10')
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')
let link4 = document.getElementById('link4')
let link5 = document.getElementById('link5')
let link6 = document.getElementById('link6')
let link7 = document.getElementById('link7')
let link8 = document.getElementById('link8')
let link9 = document.getElementById('link9')
let link10 = document.getElementById('link10')
let div = document.getElementById('div_div')
link1.onmouseover = function () {
    arrow1.hidden = false
}
let a = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7, arrow8, arrow9,arrow10]
let l = [link1, link2, link3, link4, link5, link6, link7, link8, link9,link10]
for (const j in l) {
    l[j].onmouseleave = function () {
        for (const i in a) {
            a[i].hidden = true
        }

    }
    l[j].onmouseover = function () {
        a[j].hidden = false
    }
}
