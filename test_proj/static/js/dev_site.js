btn1 = document.getElementById('resume_btn')
btn2 = document.getElementById('tutor_btn')
tutor = document.getElementById('tutor')
resume = document.getElementById('resume')

btn1.onclick = function () {
    tutor.hidden = true
    tutor.style.opacity = '0'
    resume.hidden = false
    setTimeout(() => {
        resume.style.opacity = '1';
    }, 1)
}
btn2.onclick = function () {
    resume.hidden = true
    resume.style.opacity = '0'
    tutor.hidden = false
    setTimeout(() => {
        tutor.style.opacity = '1'
    }, 1)

}
select = document.getElementById('select')
count = document.getElementById('count')
let edu = document.getElementsByName('edu')
btn3 = document.getElementById('submit_btn')
res = document.getElementById('result')

btn3.onclick = function () {
    edu = document.querySelector('input[name="edu"]:checked').value
    let price = +select.value;
    let days = +count.value
    let result = price * days * edu
    res.textContent = 'Стоймость обучения: ' + result + ' руб.';
}

//) * parseInt(count.value) * parseInt(edu.value)