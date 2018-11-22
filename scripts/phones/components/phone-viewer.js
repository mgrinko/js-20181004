import Component from '../../component.js';

export default class PhoneViewer extends Component {

  _gallery(){
    this._element.addEventListener('click', (event) => {
      let phoneThumb = event.target.closest('[data-thumb="phone-thumb"]');
      
      if (!phoneThumb) {
        return;
      }
      
      document.querySelector('[data-main-image]').src = phoneThumb.dataset.thumbSrc;
    });
  }

  show(phone) {
    this._phone = phone;

    this._render();
    this._gallery();
    
    super.show();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <button  data-btn-back >Back</button>
        <button  data-btn-add >Add to basket</button>
      </div>

      <img data-main-image="main-image" class="${ this._phone.name }" src="${ this._phone.images[0] }">
  
      <h1>${ this._phone.name }</h1>
  
      <p>${ this._phone.description }</p>
  
      <ul class="phone-thumbs">
        ${ this._phone.images.map(phone => `
          <li data-thumb="phone-thumb" data-thumb-src="${ phone }">
            <img alt="${ this._phone.name }" src="${ phone }">
          </li>
        `).join('') }
      </ul>

      <ul class="specs">
        <li>
          <span>Availability and Networks</span>
          <dl>
            <dt>Availability</dt>
            <dd>${ this._phone.availability }</dd>
          </dl>
        </li>
        <li>
          <span>Battery</span>
          <dl>
            <dt>Type</dt>
            <dd>${ this._phone.battery.type }</dd>
            <dt>Talk Time</dt>
            <dd>${ this._phone.battery.talkTime }</dd>
            <dt>Standby time (max)</dt>
            <dd>${ this._phone.battery.standbyTime }</dd>
          </dl>
        </li>
        <li>
          <span>Storage and Memory</span>
          <dl>
            <dt>RAM</dt>
            <dd>${ this._phone.storage.ram }</dd>
            <dt>Internal Storage</dt>
            <dd>${ this._phone.storage.flash }</dd>
          </dl>
        </li>
        <li>
          <span>Connectivity</span>
          <dl>
            <dt>Network Support</dt>
            <dd>${ this._phone.connectivity.cell }</dd>
            <dt>WiFi</dt>
            <dd>${ this._phone.connectivity.wifi }</dd>
            <dt>Bluetooth</dt>
            <dd>${ this._phone.connectivity.bluetooth }</dd>
            <dt>Infrared</dt>
            <dd>${ this._phone.connectivity.infrared ? `✓` : `✘` }</dd>
            <dt>GPS</dt>
            <dd>${ this._phone.connectivity.gps ? `✓` : `✘` }</dd>
          </dl>
        </li>
        <li>
          <span>Android</span>
          <dl>
            <dt>OS Version</dt>
            <dd>${ this._phone.android.os }</dd>
            <dt>UI</dt>
            <dd>${ this._phone.android.ui }</dd>
          </dl>
        </li>
        <li>
          <span>Size and Weight</span>
          <dl>
            <dt>Dimensions</dt>
            <dd>${ this._phone.sizeAndWeight.dimensions[0] }</dd>
            <dd>${ this._phone.sizeAndWeight.dimensions[1] }</dd>
            <dd>${ this._phone.sizeAndWeight.dimensions[2] }</dd>
            <dt>Weight</dt>
            <dd>${ this._phone.sizeAndWeight.weight }</dd>
          </dl>
        </li>
        <li>
          <span>Display</span>
          <dl>
            <dt>Screen size</dt>
            <dd>${ this._phone.display.screenSize }</dd>
            <dt>Screen resolution</dt>
            <dd>${ this._phone.display.screenResolution }</dd>
            <dt>Touch screen</dt>
            <dd>${ this._phone.display.touchScreen ? `✓` : `✘` }</dd>
          </dl>
        </li>
        <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${ this._phone.hardware.cpu }</dd>
          <dt>USB</dt>
          <dd>${ this._phone.hardware.usb }</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${ this._phone.hardware.audioJack }</dd>
          <dt>FM Radio</dt>
          <dd>${ this._phone.hardware.fmRadio ? `✓` : `✘` }</dd>
          <dt>Accelerometer</dt>
          <dd>${ this._phone.hardware.accelerometer ? `✓` : `✘` }</dd>
          <dt>Physical Keyboard</dt>
          <dd>${ this._phone.hardware.physicalKeyboard ? `✓` : `✘` }</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${ this._phone.camera.primary }</dd>
          <dt>Features</dt>
          <dd>${ this._phone.camera.features.join(', ') }</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>${ this._phone.additionalFeatures }</dd>
      </li>
    </ul>
    `;
  }
}
