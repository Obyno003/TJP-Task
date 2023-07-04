const hamburger= document.querySelector('.hamburger')
const hamburgerMenu= document.querySelector('.hamburger-menu');
const closeMenu= document.querySelector ('.close-menu')

hamburger.addEventListener('click', ()=> {hamburgerMenu.classList.toggle('visible')}
)
hamburger.addEventListener ('click', => closeMenu.classList.toggle('visible'))