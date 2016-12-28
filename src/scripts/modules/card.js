export class Card extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-card mdl-shadow--2dp ';
        let attributeList = '';
        let title = '';
        let expand = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'expand':
                expand = 'mdl-card--expand';
                continue;
            case 'title':
                title = attribute.value;
                continue;
            case 'class':
                classAttribute += attribute.value + ' ';
                continue;
            }

            if (attribute.value === '') {
                attributeList += attribute.name + ' ';
            } else {
                attributeList += `${attribute.name}="${attribute.value}" `;
            }

        }

        classAttribute = `class="${classAttribute}" `;
        attributeList = classAttribute + attributeList;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let supportingText = el.querySelector('mdl-supporting-text').outerHTML;
        let actionsContent = el.querySelector('mdl-card-actions').outerHTML;
        let menuContent = el.querySelector('mdl-card-menu').outerHTML;

        this.outerHTML =
            `<div ${attributeList}>
                <div class="mdl-card__title ${expand}">
                    <h2 class="mdl-card__title-text">${title}</h2>
                </div>
                ${supportingText}
                ${actionsContent}
                ${menuContent}
             </div>`;
    }

}

export class CardAction extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-button mdl-js-button ';
        let attributeList = '';
        let content = this.innerHTML;

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect ';
                continue;
            case 'coloured':
            case 'colored':
                classAttribute += 'mdl-button--colored ';
                continue;
            }

            if (attribute.value === '') {
                attributeList += attribute.name + ' ';
            } else {
                attributeList += `${attribute.name}="${attribute.value}" `;
            }

        }

        classAttribute = `class="${classAttribute}" `;
        attributeList = classAttribute + attributeList;

        this.outerHTML =
            `<a ${attributeList}>
                ${content}
             </a>`;
    }

}

export class CardActions extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-card__actions mdl-card--border">
                ${content}
             </div>`;
    }
}

export class CardMenu extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-card__menu">
                ${content}
             </div>`;
    }

}

export class SupportingText extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-card__supporting-text">
                ${content}
             </div>`;
    }

}