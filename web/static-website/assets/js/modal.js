const body = document.querySelector('body')

/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)

    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
            body.style.overflow = 'hidden'
            window.scrollTo(0, 0)
        })
    }
}
showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
    body.style.overflow = 'auto'
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
