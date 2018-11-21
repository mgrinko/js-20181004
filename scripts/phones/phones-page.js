'use strict'

import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from './phone-service.js';

export default class PhonesPage {
	constructor({ element }) {
		this._element = element;
		this._basket = [];
		this._render();
		
		this._catalog = new PhoneCatalog({
			element: this._element.querySelector('[data-component="phone-catalog"]'),
			phones: PhoneService.getAll(),
			
			onPhoneSelected: (phoneId) => {
				const phoneDetails = PhoneService.getOneById(phoneId);
				
				this._catalog.hide();
				this._viewer.show(phoneDetails);
			},
			onPhoneAddToBasketButtonClick: (phoneId) => {
				const phoneDetails = PhoneService.getOneById(phoneId);
				this._basket.push(phoneDetails);
				this._render();
			}
		});

		this._viewer = new PhoneViewer({
			element: this._element.querySelector('[data-component="phone-viewer"]'),
			onPhoneBackButtonClick: () => {
				this._catalog.show();
				this._viewer.hide();
			},
			onPhoneAddToBasketButtonClick: (phone) => {
				console.log(phone);
			},
		});
	
  }
	_render() {
		const {_basket: basket} = this;
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
						<ul>
							${basket.map(phone => `<li>${phone.name}</li>`).join('')}
						</ul>
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
