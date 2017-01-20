export class Dialog extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-dialog ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
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
                ${content}
             </dialog>`;
    }
}

export class DialogActions extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-dialog__actions ';

        for (const attribute of this.attributes) {

            if (attribute.name === 'full-width') {
                classAttribute += 'mdl-dialog__actions--full-width ';
            }
        }

        classAttribute = `class="${classAttribute}"`;
        let content = this.innerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                 ${content}
             </div>`;
    }

}

export class DialogContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-dialog__content">
                ${content}
             </div>`;
    }

}

export class DialogTitle extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<h4 class="mdl-dialog__title">${content}</h4>`;
    }

}
