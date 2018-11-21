import Component from '../../component.js';

export default class PhoneViewer extends Component {

    show(phone) {
        debugger;
        this._phone = phone;

        this._render();

        super.show();

        this._onClickGoBack = onClickGoBack;

        this.onClickImage = onClickImage;


        this._element.addEventListener('click', (event) => {
            debugger;
            if (event.target.closest('[data-button="back"]')) {
                this._onClickGoBack();
            }

        });


        this._element.addEventListener('click', (event) => {

            if (event.target.tagName != 'IMG') {
                return;
            }

            this.onClickImage(event.target.src);
        })


    }

    _render() {
        this._element.innerHTML = `
      <img  class="phone" src="${this._phone.images[0]}" data-element="image"  >

      <button data-button="back">Back </button>
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















