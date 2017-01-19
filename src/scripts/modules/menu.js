export class Menu extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-spinner mdl-js-spinner ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect' + ' ';
                continue;
            case 'location':
                classAttribute += attribute.value + `mdl-menu--${attribute.value}`;
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

    }
}
