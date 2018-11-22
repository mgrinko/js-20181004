import Component from '../../component.js';

export default class PhoneViewer extends Component {
  constructor({ element, catalog, putPhoneToCart }) {
    super({ element });
    this._catalog = catalog;
    this._putPhoneToCart = putPhoneToCart;
  }

  show(phoneDetails) {
    this._phoneDetails = phoneDetails;

    this._render(this._phoneDetails);

    super.show();

    this._element.addEventListener('click', (event) => {
      let targetGalleryImg = event.target.closest('.phone-thumbs li img');

      if (!targetGalleryImg) {
        return
      }

      let targetGalleryImgUrl = targetGallaryImg.getAttribute('src');
      this._element.querySelector('.phone').setAttribute('src', targetGalleryImgUrl);
    });


    this._element.addEventListener('click', (event) => {
      let targetBack = event.target.closest('[data-element-back]');

      if (!targetBack) {
        return
      }

      super.hide();
      this._catalog._element.hidden = false;
    });
    

    this._element.addEventListener('click', (event) => {
      let phoneName = this._phoneDetails.name;
      let phoneBtn = event.target.closest('[data-element-basket]');

      if (!phoneBtn) {
        return;
      }

      this._putPhoneToCart(phoneName);
    });

  }

  _render(phoneDetails) {
    this._element.innerHTML = `
      <img class="phone" src="${ phoneDetails.images[0] }">

      <button data-element-back>Back</button>
      <button data-element-basket>Add to basket</button>

      <h1>${ phoneDetails.name }</h1>
  
      <p>${ phoneDetails.description }</p>
  
      <ul class="phone-thumbs">

        ${ phoneDetails.images.map(image => `
            <li><img src="${ image }"></li>
          `).join('') }
      </ul>
    `;
  }
}
