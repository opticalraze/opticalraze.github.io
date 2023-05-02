const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const mobileNav = document.getElementById('mobileNav');

openNav.onclick = () => {
    mobileNav.classList.remove('hidden');
}

closeNav.onclick = () => {
    mobileNav.classList.add('hidden');
}