import Component from '../../component.js';

export default class PhoneViewer extends Component {
	constructor({ element, onPhoneBackButtonClick, onPhoneAddToBasketButtonClick }) {
		super({ element });
		
		this._onPhoneBackButtonClick = onPhoneBackButtonClick;
		this._onPhoneAddToBasketButtonClick = onPhoneAddToBasketButtonClick;
		
		this._element.addEventListener('click', (event) => {
			const phoneElementBackButton = event.target.closest('[data-element="phone-viewer-back-button"]');
			
			if (!phoneElementBackButton) {
				return;
			}
			
			this._onPhoneBackButtonClick();
		});
		
		this._element.addEventListener('click', (event) => {
			const phoneElementImage = event.target.closest('[data-element="phone-viewer-image"]');
			if (!phoneElementImage){
				return;
			}
			
			const image = phoneElementImage.getAttribute('src');
			this._onPhoneImageClick(image);
		});
		
		this._element.addEventListener('click', (event) => {
			const phoneElementAddToBasketButton = event.target.closest('[data-element="phone-viewer-add-to-basket-button"]');
			if (!phoneElementAddToBasketButton){
				return;
			}
			
			this._onPhoneAddToBasketButtonClick(this._phone.id);
			this._render();
		});
	}
	
	_onPhoneImageClick(image){
		this._currentSlide = image;
		this._render();
	}
	
	show(phone) {
		this._phone = phone;
		[this._currentSlide] = phone.images;
		
		this._render();
		
		super.show();
	}
	
	_render() {
		const {name, description, images} = this._phone;
		const currentSlide = this._currentSlide;
		
		this._element.innerHTML = `
			<img class="phone" src=${currentSlide}>
			
			<button data-element="phone-viewer-back-button">Back</button>
			<button data-element="phone-viewer-add-to-basket-button">Add to basket</button>
			
			
			<h1>${name}</h1>
			
			<p>${description}</p>
			
			<ul class="phone-thumbs">
			${images.map(image => {
				return `
				<li>
					<img data-element="phone-viewer-image" src = ${image}>
				</li>
				`;
			}).join('')}
			</ul>
`;
	}
}
