export class DivTooltip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tooltip ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'large':
                classAttribute += 'mdl-tooltip--large ';
                continue;
            case 'position':
                classAttribute += `mdl-tooltip--${attribute.value} `;
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
            `<div ${attributeList}>${content}</div>`;
    }

}

export class PTooltip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tooltip ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'large':
                classAttribute += 'mdl-tooltip--large ';
                continue;
            case 'position':
                classAttribute += `mdl-tooltip--${attribute.value} `;
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
            `<p ${attributeList}>${content}</p>`;
    }

}

export class SpanTooltip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tooltip ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'large':
                classAttribute += 'mdl-tooltip--large ';
                continue;
            case 'position':
                classAttribute += `mdl-tooltip--${attribute.value} `;
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
            `<span ${attributeList}>${content}</span>`;
    }

}