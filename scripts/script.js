let container = document.querySelector('.page');

// Объявление переменных - Кнопки открытия/закрытия pop-up
let editButton = container.querySelector('.profile__edit-button');
let addButton = container.querySelector('.profile__add-button');
let closeButtons = container.querySelectorAll('.popup__close-button');

let editPopup = container.querySelector('#edit-popup');
let addPopup = container.querySelector('#add-popup');

// Объявление переменных - Имя и описание аккаунта на странице
let accountNameOnThePage = container.querySelector('.profile__account-name');
let accountDescrOnThePage = container.querySelector('.profile__account-description');

// Объявление переменных - Формы
let popupForms = container.querySelectorAll('.popup__form');

// Объявление переменных - Инпуты для формы редактирования
let nameInput = container.querySelector('.popup__form-item_value_name');
let jobInput = container.querySelector('.popup__form-item_value_description');

// Объявление переменных - Контейнер с карточками
const cardsContainer = container.querySelector('.places-cards');

// ________________________________________________
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

// ________________________________________________
// Закрытие pop-up по нажатию на крестик

function popupClose(item) {
  item.target.closest('.popup').classList.remove('popup_opened');
};

closeButtons.forEach(function (evt) {
  evt.addEventListener('click', popupClose) ;
});

// ________________________________________________
// Функция добавления новой карточки из template
function addNewCard (cardNameValue, picLinkValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardElement.querySelector('.card__photo').setAttribute('src', picLinkValue);
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_liked');
    }
  );
  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
    }
  );

  cardsContainer.prepend(cardElement);
};

// ________________________________________________
// Функция - Логика форм при нажатии на кнопку submit
function formSubmitHandler (evt) {
  evt.preventDefault();

  console.log(evt.target.id);

  if (evt.target.id === 'edit-form') {
    accountNameOnThePage.textContent = nameInput.value;
    accountDescrOnThePage.textContent = jobInput.value;

  } else if (evt.target.id === 'add-form') {

    const cardName = container.querySelector('.popup__form-item_value_card-name');
    const picLink = container.querySelector('.popup__form-item_value_picture-link');
  
    addNewCard(cardName.value, picLink.value);
  
    cardName.value = '';
    picLink.value = '';
  }
  evt.target.closest('.popup').classList.remove('popup_opened');
};

popupForms.forEach (function (evt) {
  evt.addEventListener('submit', formSubmitHandler);
});

// ________________________________________________
// Отображение карточек при загрузке/перезагрузке страницы

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
    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like-button_liked');
      }
    );
    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
      }
    );

  })

};

cardsDisplay ();




