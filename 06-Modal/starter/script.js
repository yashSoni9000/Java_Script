'use strict';
const modal = document.querySelector('.modal');
// console.log(modal);
const overlay = document.querySelector('.overlay');
// console.log(overlay);
const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnCloseModal);
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

document.addEventListener('keydown', function (event) {
  // console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
