import Component from '../../component.js';

export default class PhoneViewer extends Component {

  constructor({ element, onBackBtn}) {
    super({ element });

      this._onBackBtn = onBackBtn;

    this._element.addEventListener('click', (e) => {
      let backBtn = event.target.closest('[data-element="back-btn"]');

      this._onBackBtn(backBtn.dataset.phoneId);


    })

  }

  show(phoneDetails) {
    this._phone = phoneDetails;

    this._render();

    super.show();
  }

  _render() {
    const { images, name, description} = this._phone;

    this._element.innerHTML = `
      <img class="phone" src="${ images[0] }">
  
      <button data-element="back-btn">Back</button>
      <button data-element="add-btn">Add to basket</button>
  
  
      <h1>${ name }</h1>
  
      <p>${ description }</p>
  
      <ul class="phone-thumbs">
      ${ images.map(image => `
        <li>
            <img src="${ image }">
        </li>
      `).join('')}
      </ul>
    `;
  }
}
