import Component from "../../component.js";
import PhoneService from './../phone-service.js';

export default class Basket extends Component {
	constructor({ element }){
		super({ element });
		
		this._basketPhoneIds = [];
		
		this._element.addEventListener('click', (event) => {
			const basketPhoneElement = event.target.closest('[data-element="basket-phone-item"]');
			
			if (!basketPhoneElement) {
				return;
			}
			
			const phoneId = basketPhoneElement.dataset.phoneId;
			this.removePhoneFromCart(phoneId);
		});
		
		this._render();
	}
	
	addPhoneToBasket(phoneId){
		const {_basketPhoneIds: basketPhoneIds} = this;
		basketPhoneIds.push(phoneId);
		this._render();
	}
	
	removePhoneFromCart(phoneId){
		const {_basketPhoneIds: basketPhoneIds} = this;
		const phoneIndex = basketPhoneIds.findIndex(basketPhone => basketPhone.id === phoneId);
		basketPhoneIds.splice(phoneIndex, 1);
		this._render();
	}
	
	_render(){
		const {_basketPhoneIds: basketPhoneIds} = this;
		
		if (basketPhoneIds.length > 0) {
			this._element.innerHTML = `
				<p>Shopping Cart</p>
				<ul class="basket-phones">
					${basketPhoneIds
						.map(phoneId => {
							const phone = PhoneService.getOneById(phoneId);
							return `<li data-element="basket-phone-item" data-phone-id="${ phone.id }">${phone.name}</li>`
						})
						.join('')
					}
				</ul>
			`;
		} else {
			this._element.innerHTML = `
				<p>Shopping Cart</p>
				<p>No items</p>
			`;
		}
		

	}
}