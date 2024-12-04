
const btnAdd = document.querySelector('.js-addBS');
const modalAdd = document.querySelector(".js-modal-add");
const modalAddClose = document.querySelector('.js-modal-add-close');
const modalAddContainer = document.querySelector('.js-modal-add-container');

function showAddDoctor() {
    modalAdd.classList.add('open');
}

function hideAddDoctor() {
    modalAdd.classList.remove('open');
}

btnAdd.addEventListener('click', showAddDoctor);

modalAddClose.addEventListener('click', hideAddDoctor);

modalAdd.addEventListener('click', hideAddDoctor);

modalAddContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});



