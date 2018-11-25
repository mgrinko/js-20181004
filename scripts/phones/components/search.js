import Component from '../../component.js';

export default class Search extends Component {
	constructor({element}){
		super({ element });
		
		this._searchQuery = '';
		
		this._render();
		
		this.on('keyup', 'search-input', (event) => {
			this._searchQuery = event.srcElement.value;
			
			this.emit('searching', this._searchQuery);
			
		});
	}
	
	_render() {
		this._element.innerHTML = `
			<p>
			Search:
				<input data-element="search-input" value = "${this._searchQuery}">
			</p>
		`;
	}
}