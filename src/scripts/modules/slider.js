export class Slider extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let min = this.getAttribute('min') || '';
        let max = this.getAttribute('max') || '';
        let value = this.getAttribute('value') || '';
        let step = this.getAttribute('step') || '';
        let tabindex = this.getAttribute('tabindex') || '';

        if (min !== '') {
            min = `min="${min}"`;
        }

        if (max !== '') {
            max = `max="${max}"`;
        }

        if (value !== '') {
            value = `value="${value}"`;
        }

        if (step !== '') {
            step = `step="${step}"`;
        }

        if (tabindex !== '') {
            tabindex = `tabindex="${tabindex}"`;
        }

        this.outerHTML =
            `<input class="mdl-slider mdl-js-slider" type="range" ${min} ${max} ${value} ${step} ${tabindex}>`;
    }
}