const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const mySidenav = document.querySelector('#mySidenav');
const homeMobile = document.querySelector('#homeMobile');
const blogMobile = document.querySelector('#blogMobile');
const specialMobile = document.querySelector('#specialMobile');
const contactMobile = document.querySelector('#contactMobile');
var username = document.querySelector('#name');
var email = document.querySelector('#email');
var subject = document.querySelector('#subject');
const submit = document.querySelector('#submit');


openMenu.addEventListener('click', () => {
    mySidenav.classList.add('w-full');
    openMenu.classList.add('open-btn');
});

closeMenu.addEventListener('click', () => {
    mySidenav.classList.remove('w-full');
    openMenu.classList.remove('open-btn');
});

homeMobile.addEventListener('click', () => {
    mySidenav.classList.remove('w-full');
    openMenu.classList.remove('open-btn');
});

blogMobile.addEventListener('click', () => {
    mySidenav.classList.remove('w-full');
    openMenu.classList.remove('open-btn');
});

specialMobile.addEventListener('click', () => {
    mySidenav.classList.remove('w-full');
    openMenu.classList.remove('open-btn');
});

contactMobile.addEventListener('click', () => {
    mySidenav.classList.remove('w-full');
    openMenu.classList.remove('open-btn');
});

// Contact Us
submit.addEventListener('click', () => {
    if (username.value == '' || email.value == '' || subject.value == '') {
        alert('Fields are required!');
    } else {
        alert(`
            Hello ${username.value}, your message has been sent successfully.
            A response will be sent to your email: ${email.value}.
            Always feel free to share with us.
        `);
    };
})
// End of Contact Us