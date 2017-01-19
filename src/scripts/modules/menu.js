export class Menu extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-menu mdl-js-menu ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect' + ' ';
                continue;
            case 'location':
                classAttribute += `mdl-menu--${attribute.value} `;
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
            `<ul ${attributeList}>
                ${content}
             </ul>`;
    }

}

export class MenuItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-menu__item ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'divider':
                classAttribute += 'mdl-menu__item--full-bleed-divider ';
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
            `<li ${attributeList}>${content}</li>`;
    }
}
