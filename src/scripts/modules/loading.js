export class ProgressBar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-progress mdl-js-progress ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'indeterminate':
                classAttribute += attribute.value + 'mdl-progress__indeterminate ';
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

        this.outerHTML =
            `<div  ${attributeList}></div>`;
    }

}

export class Spinner extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-spinner mdl-js-spinner ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'is-active':
                classAttribute += attribute.name + ' ';
                continue;
            case 'single-colour':
            case 'single-color':
                classAttribute += attribute.value + 'mdl-spinner--single-color ';
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

        this.outerHTML =
            `<div  ${attributeList}></div>`;
    }

}
