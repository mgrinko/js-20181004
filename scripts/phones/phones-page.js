'use strict'

import PhoneService from './phone-service.js';
import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import Cart from './components/cart.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;
    this._arrayPhoneName = [];

    this._render();

    this._catalog = new PhoneCatalog({
      element: this._element.querySelector('[data-component="phone-catalog"]'),
      phones: PhoneService.getAll(),

      onPhoneSelected: (phoneId) => {
        const phoneDetails = PhoneService.getOneById(phoneId);

        this._catalog.hide();
        this._viewer.show(phoneDetails);
      },

      putPhoneToCart: (phoneName) => {
        this._arrayPhoneName.push(phoneName);
        console.log('AAAAARRRRAAAAAAY _catalog = ', this._arrayPhoneName);
        this._cart.show(this._arrayPhoneName);
      },
    });

    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]'),
      catalog: this._catalog,
      putPhoneToCart: (phoneName) => {
        this._arrayPhoneName.push(phoneName);
        console.log('AAAAARRRRAAAAAAY _viewer = ', this._arrayPhoneName);
        this._cart.show(this._arrayPhoneName);
      },
    });

    this._cart = new Cart({
      element: this._element.querySelector('[data-component="cart"]'),
    });
  }

  _render() {
    this._element.innerHTML = `
      <div class="row">
  
        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <p>
              Search:
              <input>
            </p>
    
            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>
    
          <section>
            <p>Shopping Cart</p>
            <div data-component="cart"></div>
          </section>
        </div>
    
        <!--Main content-->
        <div class="col-md-10">
          <div data-component="phone-catalog"></div>
          <div data-component="phone-viewer" hidden></div>
        </div>
      </div>
    `;
  }
}
