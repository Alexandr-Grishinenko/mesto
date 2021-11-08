let container = document.querySelector('.page');

// Объявление переменных - Кнопки открытия/закрытия pop-up
let editButton = container.querySelector('.profile__edit-button');
let closeButtonEdit = container.querySelector('#closeButtonEdit');
let closeButtonAdd = container.querySelector('#closeButtonAdd');
let addButton = container.querySelector('.profile__add-button');


let editPopup = container.querySelector('#edit-popup');
let addPopup = container.querySelector('#add-popup');

// Объявление переменных - Имя и описание аккаунта на странице
let accountNameOnThePage = container.querySelector('.profile__account-name');
let accountDescrOnThePage = container.querySelector('.profile__account-description');

// Объявление переменных - Форма редактирования имени и описания аккаунта
let formElement = container.querySelector('.popup__form');

// Объявление переменных - Инпуты для редактирования имени и описания аккаунта в форме
let nameInput = formElement.querySelector('.popup__form-item_value_name');
let jobInput = formElement.querySelector('.popup__form-item_value_description');

//Объявление переменных - Инпуты для создания новой карточки: название и ссылка
let cardName = container.querySelector('.popup__form-item_value_card-name');
let picLink = container.querySelector('.popup__form-item_value_picture-link');

// Открытие pop-up; Присвоение инпутам значений имени и описания аккаунта, находящихся на странице
editButton.addEventListener('click', function() {
    editPopup.classList.add('popup_opened');
    nameInput.value = accountNameOnThePage.textContent;
    jobInput.value = accountDescrOnThePage.textContent;
  }
);

addButton.addEventListener('click', function() {
  addPopup.classList.add('popup_opened');
});

//Закрытие pop-up по нажатию на крестик
closeButtonEdit.addEventListener('click', popupClose);
closeButtonAdd.addEventListener('click', popupClose);

function popupClose() {
  editPopup.classList.remove('popup_opened');
  addPopup.classList.remove('popup_opened');
};

// closeButton.addEventListener('click', function (evt) {
//   evt.target.parentElement.parentElement.classList.remove('popup_opened');
// });

// Функция - Логика редактирования значений имени и описания аккаунта через форму
function formSubmitHandler (evt) {
  evt.preventDefault();

  accountNameOnThePage.textContent = nameInput.value;
  accountDescrOnThePage.textContent = jobInput.value;

  popupClose();
};

formElement.addEventListener('submit', formSubmitHandler);

// Карточки, стартовые карточки
const cardsContainer = container.querySelector('.places-cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = container.querySelector('#card-template').content;

function cardsDisplay () {
  initialCards.forEach(function (item) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = item.name;
    cardElement.querySelector('.card__photo').setAttribute('src', item.link);

    cardsContainer.append(cardElement);

  })

};

cardsDisplay ();


function addNewCard () {

}






