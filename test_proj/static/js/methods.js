let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')

img1.onclick = function () {
    img4.src = DJANGO_STATIC_URL + 'media/judy.jpg'
    img4.hidden = false
}
img2.onclick = function () {
    img4.src = DJANGO_STATIC_URL + 'media/Takemura.jpg'
    img4.hidden = false
}
img3.onclick = function () {
    img4.src = DJANGO_STATIC_URL + 'media/panam.jpeg'
    img4.hidden = false
}
let img5 = document.getElementById('img5')
img5.onmouseover = function () {
    img5.style.height = '500px';
}
img5.onmouseleave = function () {
    img5.style.height = '300px'
}
