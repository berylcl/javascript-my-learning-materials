'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModal = function () {
    console.log("Btn-clicked")
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnsOpenModal.addEventListener("click",openModal)

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
//KEYPRESS EVENT
document.addEventListener('keydown',function (e) {
    if (e.key === 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})