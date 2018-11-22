export default class Cart {
    constructor({ element }) {
        this._element = element;
    }

    show(arrayPhoneNames) {
        this._arrayPhoneNames = arrayPhoneNames;
        this._render(this._arrayPhoneNames);

        this._element.addEventListener('click', (event) => {
            let removeBtn = event.target.closest('.remove');

            if (!removeBtn) {
                return;
            }

            removeBtn.parentNode.remove();
        });
    }

    _render(arrayPhoneNames) {
        this._element.innerHTML = `
            <ul>
                ${ arrayPhoneNames.map(phoneName => `
                    <li>${ phoneName } <span class="remove"></span></li>
                `).join('') }
            </ul>
        `;
    }
}
