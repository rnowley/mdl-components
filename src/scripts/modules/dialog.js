export class Dialog extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-dialog ';
        let attributeList = '';
        let title = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
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

        let content = this.innerHTML;

        this.outerHTML =
            `<dialog ${attributeList}>
                <h4 class="mdl-dialog__title">${title}</h4>
                ${content}
             </dialog>`;
    }
}

export class DialogContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {

    }
}
