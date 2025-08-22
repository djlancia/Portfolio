import { toggleHiddenElement, changeToFunkyColor} from "./modules/dom-functions.js";

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
const newInfo = document.getElementsByClassName('new-info');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

