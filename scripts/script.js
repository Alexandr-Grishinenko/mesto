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
const editForm = editPopup.querySelector('#edit-form');
const addForm = addPopup.querySelector('#add-form');

// Объявление переменных - Инпуты для формы редактирования
const nameInput = container.querySelector('.popup__form-item_value_name');
const jobInput = container.querySelector('.popup__form-item_value_description');

// Объявление переменных - Контейнер с карточками / Шаблон карточки
const cardsContainer = container.querySelector('.places-cards');
const cardTemplate = container.querySelector('#card-template').content;

// Объявление переменных - Изображение и название для imagePopup
const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');

// ________________________________________________
// Открытие pop-up; Присвоение инпутам значений имени и описания аккаунта, находящихся на странице
function openPopup (popup) {
  popup.classList.add('popup_opened');
};

editButton.addEventListener('click', function() {
    nameInput.value = accountNameOnThePage.textContent;
    jobInput.value = accountDescrOnThePage.textContent;
    openPopup(editPopup);
  });

addButton.addEventListener('click', function() {
  openPopup(addPopup);
});

// ________________________________________________
// Закрытие pop-up по нажатию на крестик

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', () => closePopup(closeButton.closest('.popup'))) ;
});

// ________________________________________________
// Функция создания новой карточки из template

function createCard (cardNameValue, picLinkValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardPhoto = cardElement.querySelector('.card__photo');
  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardPhoto.src = picLinkValue;
  cardPhoto.alt = cardNameValue;

  // Открытие картинки на полный экран
  cardPhoto.addEventListener('click', function () {

    imagePopupCaption.textContent = cardNameValue;
    imagePopupPicture.src = picLinkValue;
    imagePopupPicture.alt = cardNameValue;

    openPopup(imagePopup);
    });

  // Действие для кнопки like
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_liked');
    });

  // Удаление карточки
  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
    });

  return cardElement; 
}

// ________________________________________________
// Функция добавления новой карточки в cardsContainer

function addCard (cardNameValue, picLinkValue) {
  cardsContainer.prepend(createCard(cardNameValue, picLinkValue));
};

// ________________________________________________
// Функция - Логика формы редактирования профиля при нажатии на кнопку submit

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  accountNameOnThePage.textContent = nameInput.value;
  accountDescrOnThePage.textContent = jobInput.value;

  closePopup(editPopup);
};
editForm.addEventListener('submit', handleProfileFormSubmit);

// ________________________________________________
// Функция - Логика формы добавления карточки при нажатии на кнопку submit

function handleAddFormSubmit (evt) {
  evt.preventDefault();

  const cardName = container.querySelector('.popup__form-item_value_card-name');
  const picLink = container.querySelector('.popup__form-item_value_picture-link');

  addCard(cardName.value, picLink.value);

  cardName.value = '';
  picLink.value = '';

  closePopup(addPopup);
};
addForm.addEventListener('submit', handleAddFormSubmit);

// ________________________________________________
// Отображение карточек при загрузке/перезагрузке страницы

initialCards.forEach(function (item) {
  addCard (item.name, item.link);
});
