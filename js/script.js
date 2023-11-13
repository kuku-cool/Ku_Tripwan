const logincontainer = document.querySelector('.logincontainer');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');

registerLink.addEventListener('click', ()=> {
	logincontainer.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
	logincontainer.classList.remove('active');
})

const btnPopup = document.querySelector('.iconLogin-popup');

btnPopup.addEventListener('click', ()=> {
	logincontainer.classList.add('active-popup');
})

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', ()=> {
	logincontainer.classList.remove('active-popup');
})