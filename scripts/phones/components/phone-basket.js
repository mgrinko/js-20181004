'use strict'

export default class PhoneBasket {
    constructor({element}) {
        this._element = element;
        this._addedPhones = {};
        this._render();

        this._phoneList = this._element.querySelector('.phones-list');

        this._element.addEventListener('click', (event) => {
            if (event.target.className !== 'delete-phone') {
                return;
            }
            let phoneItem = event.target.closest('li');

            if (!phoneItem) {
                return;
            }
            this._delete(phoneItem);
        });
    }

    _add(phoneId, phoneName) {
        if (this._addedPhones.hasOwnProperty(phoneId)) {
            return;
        }
        this._addedPhones[phoneId] = true;
        let phoneItem = document.createElement('li');
        phoneItem.dataset.id = phoneId;
        phoneItem.innerHTML = `${phoneName}&nbsp;<a href="#" class="delete-phone">Delete</a>`;
        this._phoneList.insertAdjacentElement("beforeEnd", phoneItem);
    }

    _delete(phoneItem) {
        this._phoneList.removeChild(phoneItem);
        let id_ = phoneItem.dataset.id;
        delete this._addedPhones[id_];
    }

    _render() {
        this._element.innerHTML = `
        <p><b>Shopping Cart</b></p>
            <ul class="phones-list"></ul>
        `
    }
}