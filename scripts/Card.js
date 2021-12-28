class Card {
  constructor(cardName, cardPicLink, templateSelector) {
    this._name = cardName;
    this._link = cardPicLink;
    this._templateSelector = templateSelector;
  }

  _cardTemplate() {
    const template = document.querySelector(_templateSelector).content.querySelector('.card').cloneNode(true);
  }

  
}