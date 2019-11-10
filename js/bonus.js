const trigger = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.my-modal');

trigger.addEventListener('click', () => {
    modal.showModal();
});
closeBtn.addEventListener('click', () => {
    modal.close();
});