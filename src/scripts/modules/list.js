export class ActionList extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-list ';
        classAttribute = (this.getAttribute('class') + ' ' || '') + classAttribute;
        classAttribute = `class="${classAttribute}" `;
        let content = this.innerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                ${content}
             </div>`;
    }
}

export class ActionListItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-list__item">
                ${content}
             </div>`;
    }

}

export class List extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-list ';
        classAttribute = (this.getAttribute('class') + ' ' || '') + classAttribute;
        classAttribute = `class="${classAttribute}" `;
        let content = this.innerHTML;

        this.outerHTML =
            `<ul ${classAttribute}>
                ${content}
             </ul>`;
    }
}

export class ListItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-list__item ';
        classAttribute += this.getAttribute('two-line') !== null && this.getAttribute('two-line') === 'true'
                       ? 'mdl-list__item--two-line'
                       : '';
        classAttribute += this.getAttribute('three-line') !== null && this.getAttribute('three-line') === 'true'
                       ? 'mdl-list__item--three-line'
                       : '';
        classAttribute = `class="${classAttribute}" `;

        let content = this.innerHTML;

        this.outerHTML =
            `<li ${classAttribute}>
                ${content}
             </li>`;
    }

}

export class ListItemIconAction extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let icon = this.getAttribute('icon') || '';

        this.outerHTML =
            `<a class="mdl-list__item-secondary-action" href="${href}">
                <i class="material-icons">${icon}</i>
            </a>`;
    }

}

export class ListItemSecondaryAction extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-secondary-action">
                 ${content}
             </span>`;
    }

}

export class ListItemSecondaryInformation extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-secondary-info">
                 ${content}
             </span>`;
    }

}

export class ListItemSubTitle extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-sub-title">
                 ${content}
             </span>`;
    }

}

export class ListItemAvatar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let avatar = this.getAttribute('avatar') || '';

        this.outerHTML =
            `<i class="material-icons mdl-list__item-avatar">${avatar}</i>`;
    }

}

export class ListItemIcon extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let icon = this.getAttribute('icon') || '';

        this.outerHTML = 
            `<i class="material-icons mdl-list__item-icon">${icon}</i>`;
    }

}

export class ListItemPrimaryContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-primary-content">
                ${content}
             </span>`;
    }

}

export class ListItemSecondaryContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-secondary-content">
                ${content}
             </span>`;
    }

}

export class ListItemTextBody extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="mdl-list__item-text-body">
                ${content}
             </span>`;
    }

}


