/*const btnopenModal = document.querySelectorAll('.open-modal')
const btncloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


for (let i = 0; i < btnopenModal.length; i++) {
    btnopenModal[i].addEventListener("click", openModal);
    console.log("btn clicked");
}


//KEYPRESS EVENT
document.addEventListener('keydown',function (e) {
    if (e.key === 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})

*/
const btnopenModal = document.querySelectorAll('.open-modal')
const btncloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


for (let i = 0; i < btnopenModal.length; i++) {
    btnopenModal[i].addEventListener("click", openModal);
}

btncloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
