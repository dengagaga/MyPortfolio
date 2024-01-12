const menuIcon = document.getElementById('menu-icon')
const nav = document.querySelector('.nav')
menuIcon.onclick = () => {
    nav.classList.toggle('active')
}