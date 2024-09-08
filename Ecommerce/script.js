let signin=document.querySelector('.signin')
signin.addEventListener('click',()=>{
    alert('The website is under maintainance🙏')
})

let moon=document.querySelector('.moon')
let sun=document.querySelector('.sun')
let body=document.getElementById('body')
let nav=document.getElementById('nbar')
let aboutText=document.getElementById('aboutText')
let homeText=document.getElementById('homeText')

moon.addEventListener('click',()=>{
    nav.classList.remove('bg-dark')
    nav.classList.add('bg-info')
    body.classList.remove('bg-light')
    body.classList.add('bg-dark')
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
    aboutText.classList.add('text-white')
    homeText.classList.add('text-white')
})

sun.addEventListener('click',()=>{
    nav.classList.add('bg-dark')
    nav.classList.remove('bg-info')
    body.classList.add('bg-light')
    body.classList.remove('bg-dark')
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
    aboutText.classList.remove('text-white')
    homeText.classList.remove('text-white')
})
