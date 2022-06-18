// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openmodal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');

openmodal.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

close.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});
