import Component from '../../component.js';

export default class PhoneCatalog extends Component {
  constructor({ element, phones, onPhoneSelected, onPhoneAddToBasketButtonClick }) {
    super({ element });

    this._phones 						= phones;
    this._onPhoneSelected 				= onPhoneSelected;
    this._onPhoneAddToBasketButtonClick = onPhoneAddToBasketButtonClick;

    this._render();
	
	this._element.addEventListener('click', (event) => {
		const phoneElement 					= event.target.closest('[data-element="phone-item"]');
		const phoneElementAddToCartButton 	= event.target.closest('[data-element="phone-item-add-to-cart-button"]');
	
		if (!phoneElement && !phoneElementAddToCartButton) {
			return;
		}
	
		const isPhoneElementClick 					= phoneElement !== null;
		const isPhoneElementAddToCartButtonClick 	= phoneElementAddToCartButton !== null;
	
		switch(true){
			case isPhoneElementAddToCartButtonClick:
				this._onPhoneAddToBasketButtonClick(phoneElement.dataset.phoneId);
				event.stopPropagation();
				break;
			case isPhoneElementClick:
				this._onPhoneSelected(phoneElement.dataset.phoneId);
				break;
		}
		
	});
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._phones.map(phone => `
          <li class="thumbnail" data-element="phone-item" data-phone-id="${ phone.id }">
            <a href="#${ phone.id }" class="thumb">
              <img alt="${ phone.name }" src="${ phone.imageUrl }">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success" data-element="phone-item-add-to-cart-button">
                Add
              </a>
            </div>
  
            <a href="#${ phone.id }">${ phone.name }</a>
            <p>${ phone.snippet }</p>
          </li>
        `).join('') }
      </ul>
    `;
  }
}
