export class Checkbox extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let title = this.getAttribute('title') || '';
        let checked = this.getAttribute('checked') !== null && this.getAttribute('checked') === 'true'
                       ? 'checked'
                       : '';

        this.outerHTML = 
            `<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="${id}">
                <input type="checkbox" id="${id}" class="mdl-checkbox__input" ${checked}>
                <span class="mdl-checkbox__label">${title}</span>
            </label>`;
    }
}

export class IconToggle extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let icon = this.getAttribute('icon') || '';
        let checked = this.getAttribute('checked') !== null && this.getAttribute('checked') === 'true'
                       ? 'checked'
                       : '';

        this.outerHTML =
            `<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="${id}">
                <input type="checkbox" id="${id}" class="mdl-icon-toggle__input" ${checked}>
                <i class="mdl-icon-toggle__label material-icons">${icon}</i>
             </label>`;
    }
}

export class RadioButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let name = this.getAttribute('name') || '';
        let value = this.getAttribute('value') || '';
        let title = this.getAttribute('title') || '';
        let checked = this.getAttribute('checked') !== null && this.getAttribute('checked') === 'true'
                       ? 'checked'
                       : '';

        this.outerHTML =
            `<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="${id}">
                <input type="radio" id="${id}" class="mdl-radio__button" name="${name}" value="${value}" ${checked}>
                <span class="mdl-radio__label">${title}</span>
             </label>`;
    }
}

export class Switch extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let checked = this.getAttribute('checked') !== null && this.getAttribute('checked') === 'true'
                       ? 'checked'
                       : '';
        let content = this.innerHTML;

        this.outerHTML =
            `<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="${id}">
                 <input type="checkbox" id="${id}" class="mdl-switch__input" ${checked}>
                 <span class="mdl-switch__label">${content}</span>
             </label>`;
    }
}