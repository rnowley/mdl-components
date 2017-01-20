export class TextField extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-textfield mdl-js-textfield ';
        let label = '';
        let id = '';
        let errorText = '';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'label':
                label = attribute.value;
                continue;
            case 'id':
                id = attribute.value;
                attributeList += `id="${attribute.value}" `;
                continue;
            case 'floating-label':
                classAttribute += 'mdl-textfield--floating-label ';
                continue;
            case 'error-text':
                errorText = `<span class="mdl-textfield__error">${attribute.value}</span>`;
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

        this.outerHTML =
            `<div ${classAttribute}>
                 <input class="mdl-textfield__input" ${attributeList}>
                 <label class="mdl-textfield__label" for="${id}">${label}</label>
                 ${errorText}
             </div>`;
    }
}

export class TextArea extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-textfield mdl-js-textfield ';
        let label = '';
        let id = '';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'label':
                label = attribute.value;
                continue;
            case 'id':
                id = attribute.value;
                attributeList += `id="${attribute.value}" `;
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

        this.outerHTML =
            `<div ${classAttribute}>
                 <textarea class="mdl-textfield__input" ${attributeList}></textarea>
                 <label class="mdl-textfield__label" for="${id}">${label}</label>
             </div>`;
    }
}

export class ExpandingTextField extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-textfield mdl-js-textfield mdl-textfield--expandable ';
        let icon= '';
        let id = '';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'icon':
                icon = attribute.value;
                continue;
            case 'id':
                id = attribute.value;
                attributeList += `id="${attribute.value}" `;
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

        this.outerHTML =
            `<div ${classAttribute}>
                <label class="mdl-button mdl-js-button mdl-button--icon" for="${id}">
                    <i class="material-icons">${icon}</i>
                </label>
                <div class="mdl-textfield__expandable-holder">
                    <input class="mdl-textfield__input" ${attributeList}>
                    <label class="mdl-textfield__label" for="${id}"></label>
                </div>
             </div>`;
    }
}
