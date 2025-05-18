const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (btn of btnsOpenModal) {
  btn.addEventListener('click', e => {
    console.log(`Button clicked ${e.target.textContent} `);

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', () => {
  hiddenModal();
});

document.addEventListener('keydown', e => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Esc key pressed');
    hiddenModal();
    hiddenModal();
  }
});

const hiddenModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
