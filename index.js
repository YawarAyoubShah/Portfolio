
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const sidebar_open = document.querySelector('.sidebar-open')
const sidebar_close = document.querySelector('.sidebar-close')
const sidebar = document.querySelector('.sidebar')
const links = document.querySelector('.nav-text')
sidebar_open.addEventListener('click', ()=>{
    sidebar.style.left = '0'
})
sidebar_close.addEventListener('click', ()=>{
    sidebar.style.left = '-100%'
})
links.addEventListener('click', ()=>{
    sidebar.style.left = '-100%'
})
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if (darkmode === 'active') enableDarkmode()
themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
var typed1 = new Typed('#element1', {
    strings: ['Designed With', 'Love & Affection', '& More by', '~Yawar Ayoub Shah'],
    typeSpeed: 90,
});
var typed2 = new Typed('#element2', {
    strings: ['Professional for HTML', 'Professional for CSS', 'Professional for JS', '~Full Stack WebDeveloper'],
    typeSpeed: 90,
});