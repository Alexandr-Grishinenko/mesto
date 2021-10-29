let container = document.querySelector('.page');

// Объявление переменных - Кнопки открытия/закрытия pop-up
let editButton = container.querySelector('.profile__edit-button');
let closeButton = container.querySelector('.popup__close-button');

let editPopup = container.querySelector('.popup');

// Объявление переменных - Имя и описание аккаунта на странице
let accountNameOnThePage = container.querySelector('.profile__account-name');
let accountDescrOnThePage = container.querySelector('.profile__account-description');

// Объявление переменных - Форма редактирования имени и описания аккаунта
let formElement = container.querySelector('.popup__form');

// Объявление переменных - Инпуты для редактирования имени и описания аккаунта в форме
let nameInput = formElement.querySelector('.popup__form-item_value_name');
let jobInput = formElement.querySelector('.popup__form-item_value_description');

// Открытие pop-up; Присвоение инпутам значений имени и описания аккаунта, находящихся на странице
editButton.addEventListener('click', function() {
    editPopup.classList.add('popup_opened');
    nameInput.value = accountNameOnThePage.textContent;
    jobInput.value = accountDescrOnThePage.textContent;
  }
);

//Закрытие pop-up по нажатию на крестик
closeButton.addEventListener('click', popupClose);

function popupClose() {
  editPopup.classList.remove('popup_opened');
};

// Функция - Логика редактирования значений имени и описания аккаунта через форму
function formSubmitHandler (evt) {
  evt.preventDefault(); 

  accountNameOnThePage.textContent = nameInput.value;
  accountDescrOnThePage.textContent = jobInput.value;

  popupClose();
};

formElement.addEventListener('submit', formSubmitHandler);








