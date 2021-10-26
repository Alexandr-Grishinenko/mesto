let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let editPopup = content.querySelector('.popup-for-edit');
let closeButton = content.querySelector('.popup-for-edit__close-button');

let accountNameOnThePage = content.querySelector('.profile__account-name');
let accountDescrOnThePage = content.querySelector('.profile__account-description');

let formElement = content.querySelector('.popup-for-edit__form');

let nameInput = formElement.querySelector('.popup-for-edit__form-item_value_name');
let jobInput = formElement.querySelector('.popup-for-edit__form-item_value_description');


function popupOpening() {
  editPopup.classList.add('popup-for-edit_opened');
  nameInput.setAttribute('value', accountNameOnThePage.textContent);
  jobInput.setAttribute('value', accountDescrOnThePage.textContent);

  console.log(nameInput.getAttribute('value'));
  console.log(jobInput.getAttribute('value'));
}

function popupClosing() {
  editPopup.classList.remove('popup-for-edit_opened');
}

editButton.addEventListener('click', popupOpening);
closeButton.addEventListener('click', popupClosing);


console.log(nameInput.getAttribute('value'));
console.log(jobInput.getAttribute('value'));

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                          // Так мы можем определить свою логику отправки.
                          // О том, как это делать, расскажем позже.


    accountNameOnThePage.textContent = nameInput.getAttribute('value');
    // nameInput.getAttribute('value')
    accountDescrOnThePage.textContent = jobInput.getAttribute('value');
    // jobInput.getAttribute('value')

    // Получите значение полей jobInput и nameInput из свойства value

    console.log(nameInput.getAttribute('value'));
    console.log(jobInput.getAttribute('value'));

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    popupClosing();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
