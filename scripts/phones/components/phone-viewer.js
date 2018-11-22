import Component from '../../component.js';

export default class PhoneViewer extends Component {
    constructor({ element, onClickGoBack, onClickImage }) {
        super({ element });

        super.show();

        this._onClickGoBack = onClickGoBack;

        this.onClickImage = onClickImage;

        this._element= element,

        this._element.addEventListener('click', (event) => {
            if (event.target.closest('[data-element="back"]')) {
                this._onClickGoBack();
            }

        });

        this._element.addEventListener('click', (event) => {
            if (event.target.closest('[data-element="image"]')) {
                return;
            }
            this.onClickImage(event.target.src);
        })
    }

    show(phone){
        this._phone = phone;
        this._render();
    }

    _render() {
        this._element.innerHTML = `
      <img  class="phone" src="${this._phone.images[0]}" data-element="image"  >

      <button data-element="back">Back </button>
      <button>Add to basket</button>

   <h1>${this._phone.name}</h1>
    <p>${this._phone.description}</p>
    <ul class="phone-thumbs">
${this._phone.images.map(phone => `<li> <img src="${phone}"></li>`
        ).join('')}

              </ul>
    `;
    }
}















