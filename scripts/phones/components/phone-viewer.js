import Component from '../../component.js';

export default class PhoneViewer extends Component {
    constructor({ element, onBackButtonClick, onAddToBasket}) {
        super({ element });
        this.onBackButtonClick = onBackButtonClick;
        this.onAddToBasket = onAddToBasket;
    }
    show(phone) {
        this._phone = phone;
        this._render();

        super.show();
    }

    _render() {
        let detailOptions = this._phone;
        this._element.innerHTML = `
            <img class="phone" src="${ detailOptions.images[0] }">
             <button class="back-button">Back</button>
            <button class="add-button">Add to basket</button>
             <h1>${ detailOptions.name }</h1>
             <p>${ detailOptions.description }</p>
              <ul class="phone-thumbs">
               ${ detailOptions.images.map(src => `
                 <li class="thumbnail">
                    <img src="${src}" />
                  </li>
               `).join('') }
              </ul>
              <ul class="specs">
                <li>
                    <span>Android</span>
                    <dl>
                        <dt>OS</dt>
                        <dd>${ detailOptions.android.os }</dd>
                    <dl>
                    <dl>
                        <dt>UI</dt>
                        <dd>${ detailOptions.android.ui }</dd>
                    <dl>
                </li>
                <li>
                    <span>Battery</span>
                    <dl>
                        <dt>Standby time</dt>
                        <dd>${ detailOptions.battery.standbyTime }</dd>
                    <dl>
                    <dl>
                        <dt>Talk time</dt>
                        <dd>${ detailOptions.battery.talkTime }</dd>
                    <dl>
                    <dl>
                        <dt>Type</dt>
                        <dd>${ detailOptions.battery.type }</dd>
                    <dl>
                </li>
                <li>
                    <span>Hardware</span>
                    <dl>
                        <dt>accelerometer</dt>
                        <dd>${ detailOptions.hardware.accelerometer  ? '+' : '-' }</dd>
                    <dl>
                    <dl>
                        <dt>audioJack</dt>
                        <dd>${ detailOptions.hardware.audioJack }</dd>
                    <dl>
                    <dl>
                        <dt>cpu</dt>
                        <dd>${ detailOptions.hardware.cpu }</dd>
                    <dl>
                     <dl>
                        <dt>fmRadio</dt>
                        <dd>${ detailOptions.hardware.fmRadio ? '+' : '-'}</dd>
                    <dl>
                    <dl>
                        <dt>physicalKeyboard</dt>
                        <dd>${ detailOptions.hardware.physicalKeyboard }</dd>
                    <dl>
                    <dl>
                        <dt>usb</dt>
                        <dd>${detailOptions.hardware.usb}</dd>
                    <dl>
                </li>
               </ul>
         `;
        let thumbs = document.querySelector('.phone-thumbs');
        let largeImg = document.querySelector('.phone');

        thumbs.onclick = function(e) {
            let target = e.target;
            while (target !== this) {
                if (target.tagName === 'IMG') {
                    e.preventDefault();
                    largeImg.src = target.src;
                    return;
                }
                target = target.parentNode;
            }
        };

        this._element.querySelector('.back-button').addEventListener('click', () => {
            this.onBackButtonClick();
        });

        this._element.querySelector('.add-button').addEventListener('click', () => {
            this.onAddToBasket(detailOptions.id, detailOptions.name);
        });
    }
}
