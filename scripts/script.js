let content = document.querySelector('.content');

// Объявление переменных - Кнопки открытия/закрытия pop-up
let editButton = content.querySelector('.profile__edit-button');
let closeButton = content.querySelector('.popup-for-edit__close-button');

let editPopup = content.querySelector('.popup-for-edit');

// Объявление переменных - Имя и описание аккаунта на странице
let accountNameOnThePage = content.querySelector('.profile__account-name');
let accountDescrOnThePage = content.querySelector('.profile__account-description');

// Объявление переменных - Форма редактирования имени и описания аккаунта
let formElement = content.querySelector('.popup-for-edit__form');

// Объявление переменных - Инпуты для редактирования имени и описания аккаунта в форме
let nameInput = formElement.querySelector('.popup-for-edit__form-item_value_name');
let jobInput = formElement.querySelector('.popup-for-edit__form-item_value_description');

// Открытие pop-up; Присвоение инпутам значений имени и описания аккаунта, находящихся на странице
editButton.addEventListener('click', function() {
    editPopup.classList.add('popup-for-edit_opened');
    nameInput.setAttribute('value', accountNameOnThePage.textContent);
    jobInput.setAttribute('value', accountDescrOnThePage.textContent);
  }
);

//Закрытие pop-up по нажатию на крестик
closeButton.addEventListener('click', function() {
    editPopup.classList.remove('popup-for-edit_opened');
  }
);

// Закрытие pop-up по нажатию на любое место в окне, кроме контейнера формы
// Нравится, когда всплывающие окна можно закрыть нажав на любое свободное место
// Поискал в нете, спросил у коллег-программистов - подсказали, объяснили
editPopup.addEventListener('click', function(evt) {
    if (evt.target !== this) {
      return;
    }
    popupClosing();
  }
);

// Функция - Логика редактирования значений имени и описания аккаунта через форму
formElement.addEventListener('submit', function(evt) {
    evt.preventDefault(); 

    accountNameOnThePage.textContent = nameInput.value;
    accountDescrOnThePage.textContent = jobInput.value;

    popupClosing();
  }
);

// Изменение отображения кнопки like после нажатия
let likeButton = content.querySelector('.card__like-button');
likeButton.addEventListener('click', function() {
    if (this.classList.contains('card__like-button_liked')) {
      this.classList.remove('card__like-button_liked')
    } else {
      this.classList.add('card__like-button_liked')
    }
  }
);






