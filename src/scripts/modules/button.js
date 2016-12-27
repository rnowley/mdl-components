export class FlatButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-button mdl-js-button ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'accent':
                classAttribute += 'mdl-button--accent ';
                continue;
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect ';
                continue;
            case 'coloured':
            case 'colored':
                classAttribute += 'mdl-button--colored ';
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

        let content = this.innerHTML;
        this.outerHTML =
            `<button ${attributeList}>
                ${content}
             </button>`;
    }

}

export class FloatingActionButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-button mdl-js-button mdl-button--fab ';
        let attributeList = '';
        let icon = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'icon':
                icon = attribute.value;
                continue;
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
            `<button ${attributeList}>
                <i class="material-icons">${icon}</i>
             </button>`;
    }

}

export class RaisedButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-button mdl-js-button mdl-button--raised ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'accent':
                classAttribute += 'mdl-button--accent ';
                continue;
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect ';
                continue;
            case 'coloured':
            case 'colored':
                classAttribute += 'mdl-button--colored ';
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

        let content = this.innerHTML;
        this.outerHTML =
            `<button ${attributeList}>
                ${content}
             </button>`;
    }
}