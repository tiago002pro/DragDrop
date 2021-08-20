/** help **/
function log(message) {
    console.log(">" + message)
}

/** app **/
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** our cards **/
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    // log("CARD: START DRAGGING");
    dropzones.forEach(dropzone => dropzone.classList.add('hightlight'))
    this.classList.add('is-dragging')
}

function drag() {
    log("CARD: IS DRAGGING");
    
}

function dragend() {
    // log("CARD: STOP DRAGGING");
    dropzones.forEach(dropzone => dropzone.classList.remove('hightlight'))
    this.classList.remove('is-dragging')

}

/** place where we will drop cards **/
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    log("DROPZONE: ENTER IN ZONE");
}

function dragover() {
    log("DROPZONE: OVER");
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    log("DROPZONE: LEAVE");
    this.classList.remove('over')
}

function drop() {
    log("DROPZONE: DROPPED");
    
}