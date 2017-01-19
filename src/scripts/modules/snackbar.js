export class SnackBar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-js-snackbar mdl-snackbar ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            if (attribute.name === 'class') {
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
            `<div ${attributeList}>
                 <div class="mdl-snackbar__text"></div>
                 <button class="mdl-snackbar__action" type="button"></button>
             </div>`;
    }

}
