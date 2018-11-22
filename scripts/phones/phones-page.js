'use strict'

import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneBasket from './components/phone-basket.js';
import PhoneService from './phone-service.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    this._catalog = new PhoneCatalog({
      element: this._element.querySelector('[data-component="phone-catalog"]'),
      phones: PhoneService.getAll(),

      onPhoneSelected: (phoneId) => {
        const phoneDetails = PhoneService.getOneById(phoneId);

        this._catalog.hide();
        this._viewer.show(phoneDetails);
      },
    });

    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]'),
        onBackButtonClick: () => {
            this._viewer.hide();
            this._catalog.show();
        },
        onAddToBasket: (phoneId, phoneName) => {
            this._basket._add(phoneId, phoneName)
        }
    });

    this._basket = new PhoneBasket({
        element: this._element.querySelector('[data-component="phone-basket"]'),
    })
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
    
          <div data-component="phone-basket"></div>
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
