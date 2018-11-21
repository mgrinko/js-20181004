import Component from "../../component.js";

export default class Basket extends Component {
	constructor({ element }){
		super({ element });
		
		this._basketPhones = [];
		
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
	
	addPhoneToBasket(phone){
		const {_basketPhones: basketPhones} = this;
		basketPhones.push(phone);
		this._render();
	}
	
	removePhoneFromCart(phoneId){
		const {_basketPhones: basketPhones} = this;
		const phoneIndex = basketPhones.findIndex(basketPhone => basketPhone.id === phoneId);
		basketPhones.splice(phoneIndex, 1);
		this._render();
	}
	
	_render(){
		const {_basketPhones: basketPhones} = this;
		
		if (basketPhones.length > 0) {
			this._element.innerHTML = `
				<p>Shopping Cart</p>
				<ul class="basket-phones">
					${basketPhones
						.map(phone => `<li data-element="basket-phone-item" data-phone-id="${ phone.id }">${phone.name}</li>`)
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