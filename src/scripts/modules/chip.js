export class ButtonChip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-chip ';
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
            `<button type="button" ${attributeList}>
                 <span class="mdl-chip__text">${title}</span>
             </button>`;
    }
}

export class Chip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-chip ';
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
            `<span ${attributeList}>
                 <span class="mdl-chip__text">${title}</span>
             </span>`;
    }
}

export class ContactChip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-chip mdl-chip--contact ';
        let attributeList = '';
        let text = '';
        let title = '';
        let backgroundColour = '';
        let textColour = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'text':
                text = attribute.value;
                continue;
            case 'title':
                title = attribute.value;
                continue;
            case 'background-colour':
            case 'background-color':
                backgroundColour = 'mdl-color--' + attribute.value;
                continue;
            case 'text-colour':
            case 'text-color':
                textColour = 'mdl-color-text--' + attribute.value;
                continue;
            case 'class':
                classAttribute += attribute.value + ' ';
                continue;
            }

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
            `<span ${attributeList}>
                 <span class="mdl-chip__contact ${backgroundColour} ${textColour}">${text}</span>
                 <span class="mdl-chip__text">${title}</span>
             </span>`;
    }
}

export class DeletableChip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-chip mdl-chip--deletable ';
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
            `<span ${attributeList}>
                 <span class="mdl-chip__text">${title}</span>
                 <button type="button" class="mdl-chip__action"><i class="material-icons">cancel</i></button>
             </span>`;
    }
}

export class DeletableContactChip extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-chip mdl-chip--contact mdl-chip--deletable ';
        let attributeList = '';
        let title = '';
        let imgSrc = '';
        let href = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'title':
                title = attribute.value;
                continue;
            case 'href':
                href = attribute.value;

                if (href === null || href === '') {
                    href = '#';
                }

                continue;
            case 'src':
                imgSrc = attribute.value;
                continue;
            case 'class':
                classAttribute += attribute.value + ' ';
                continue;
            }

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
            `<span ${attributeList}>
                <img class="mdl-chip__contact" src="${imgSrc}"></img>
                <span class="mdl-chip__text">${title}</span>
                <a href="${href}" class="mdl-chip__action"><i class="material-icons">cancel</i></a>
            </span>`;
    }
}