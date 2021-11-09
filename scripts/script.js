const container = document.querySelector('.page');

// Объявление переменных - Кнопки открытия/закрытия pop-up
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const closeButtons = container.querySelectorAll('.popup__close-button');

// Объявление переменных - popup
const editPopup = container.querySelector('#edit-popup');
const addPopup = container.querySelector('#add-popup');
const imagePopup = container.querySelector('#image-popup');

// Объявление переменных - Имя и описание аккаунта на странице
const accountNameOnThePage = container.querySelector('.profile__account-name');
const accountDescrOnThePage = container.querySelector('.profile__account-description');

// Объявление переменных - Формы
const popupForms = container.querySelectorAll('.popup__form');

// Объявление переменных - Инпуты для формы редактирования
const nameInput = container.querySelector('.popup__form-item_value_name');
const jobInput = container.querySelector('.popup__form-item_value_description');

// Объявление переменных - Контейнер с карточками / Шаблон карточки
const cardsContainer = container.querySelector('.places-cards');
const cardTemplate = container.querySelector('#card-template').content;

// ________________________________________________
// Открытие pop-up; Присвоение инпутам значений имени и описания аккаунта, находящихся на странице
function popupOpen (evt) {
  evt.classList.add('popup_opened');
};

editButton.addEventListener('click', function() {
    nameInput.value = accountNameOnThePage.textContent;
    jobInput.value = accountDescrOnThePage.textContent;
    popupOpen(editPopup);
  });

addButton.addEventListener('click', function() {
  popupOpen(addPopup);
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
// Функция добавления новой карточки из template /  / удаление карточки
function addNewCard (cardNameValue, picLinkValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardPhoto = cardElement.querySelector('.card__photo');
  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardPhoto.src = picLinkValue;
  cardPhoto.alt = cardNameValue;

  // Открытие картинки на полный экран
  cardPhoto.addEventListener('click', function () {

    imagePopup.querySelector('.image-popup__caption').textContent = cardNameValue;
    const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
    imagePopupPicture.src = picLinkValue;
    imagePopupPicture.alt = cardNameValue;

    popupOpen(imagePopup);
    });

  // Действие для кнопки like
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_liked');
    });

  // Удаление карточки
  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
    });

  cardsContainer.prepend(cardElement);
};

// ________________________________________________
// Функция - Логика форм при нажатии на кнопку submit

function formSubmitHandler (evt) {
  evt.preventDefault();

  if (evt.target.id === 'edit-form') {
    accountNameOnThePage.textContent = nameInput.value;
    accountDescrOnThePage.textContent = jobInput.value;

  } else if (evt.target.id === 'add-form') {

    const cardName = container.querySelector('.popup__form-item_value_card-name');
    const picLink = container.querySelector('.popup__form-item_value_picture-link');

    addNewCard(cardName.value, picLink.value);

    cardName.value = '';
    picLink.value = '';
  };
  evt.target.closest('.popup').classList.remove('popup_opened');
};

popupForms.forEach (function (evt) {
  evt.addEventListener('submit', formSubmitHandler);
});

// ________________________________________________
// Отображение карточек при загрузке/перезагрузке страницы

initialCards.forEach(function (item) {
  addNewCard (item.name, item.link);
});
