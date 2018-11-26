import Component from '../../component.js';

export default class PhoneViewer extends Component {

  constructor({ element, onBackBtn, onAdd}) {
    super({ element });

      this._onBackBtn = onBackBtn;
      this._onAdd = onAdd;

    // this._element.addEventListener('click', (e) => {
    //   let backBtn = event.target.closest('[data-element="back-btn"]');
    //
    //   if (!backBtn) {
    //     return;
    //   }
    //
    //   this._onBackBtn();
    // });

      this.on('click', 'back-btn', () => {
        this._onBackBtn()
      });

      this.on('click','add-btn', () => {
          this._onAdd(this._phone.id);
      });

      this.on('click','small-image', (event) => {
          this._currentImage = event.delegateTarget.src;
          this._render();
      });

      // события кликов
      // this._element.addEventListener('click', (event) => {
      //     const addBtn = event.target.closest('[data-element="add-btn"]');
      //
      //     if (!addBtn) {
      //         return;
      //     }
      //
      //     this._onAdd(this._phone.id);
      // });

      // this._element.addEventListener('click', (event) => {
      //     const addBtn = event.target.closest('[data-element="add-btn"]');
      //
      //     if (!addBtn) {
      //         return;
      //     }
      //
      //     console.log('dobavleno');
      //     const phoneElement = event.target.closest('[data-element="phone-item"]');
      //     this._onAdd(phoneElement.dataset.phoneId);
      // });

      //клик по картинке, галерея
      // this._element.addEventListener('click', (event) => {
      //     const smallImage = event.target.closest('[data-element="small-image"]');
      //
      //     if (!smallImage) {
      //         return;
      //     }
      //
      //     this._currentImage = smallImage.src;
      //     this._render();
      // });
  }

  show(phoneDetails) {
    this._phone = phoneDetails;
    this._currentImage = phoneDetails.images[0];

    this._render();

    super.show();
  }

  _render() {
    const { images, name, description} = this._phone;

    this._element.innerHTML = `
      <img class="phone" src="${ this._currentImage }">
  
      <button data-element="back-btn">Back</button>
      <button data-element="add-btn">Add to basket</button>
  
  
      <h1>${ name }</h1>
  
      <p>${ description }</p>
  
      <ul class="phone-thumbs">
      ${ images.map(image => `
        <li>
            <img data-element="small-image" src="${ image }">
        </li>
      `).join('')}
      </ul>
    `;
  }
}
