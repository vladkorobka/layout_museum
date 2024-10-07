const showNav = document.querySelector('a[href="#top-menu"]');
const closeNav = document.querySelector('a[href="#home"]');
const navItem = document.querySelectorAll(".nav__item");

const showScroll = () => document.body.classList.remove("no-scroll");
const hiddenScroll = () => document.body.classList.add("no-scroll");

showNav.addEventListener("click", hiddenScroll);
closeNav.addEventListener("click", showScroll);
navItem.forEach((item) => item.addEventListener("click", showScroll));
