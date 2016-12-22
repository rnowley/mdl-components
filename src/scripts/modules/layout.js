export class TransparentHeaderLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = this.getAttribute('class') || '';
        classAttribute = `class="${classAttribute} mdl-layout mdl-js-layout"`;

        let title = this.getAttribute('title') || '';
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let navContent = el.querySelector('mdl-navigation').outerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;
        this.outerHTML =
            `<div ${classAttribute}>
                <header class="mdl-layout__header mdl-layout__header--transparent">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">${title}</span>
                        <div class="mdl-layout-spacer"></div>
                        ${navContent}
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${title}</span>
                    ${navContent}
                </div>
                ${layoutContent}
            </div>`;
    }
}

export class FixedDrawerLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = this.getAttribute('class') || '';
        let title = this.getAttribute('title') || '';
        classAttribute = `class="${classAttribute} mdl-layout--fixed-drawer mdl-js-layout"`;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let navContent = el.querySelector('mdl-navigation').outerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;
        this.outerHTML =
            `<div ${classAttribute}>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${title}</span>
                    ${navContent}
                </div>
                ${layoutContent}
            </div>`;
    }
}

export class LayoutContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<main class="mdl-layout__content">
				<div class="page-content">
                	${content}
				</div>
            </main>`;
    }
}

export class Navigation extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<nav class="mdl-navigation">
                ${content}
            </nav>`;
    }
}

export class NavigationLink extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let content = this.innerHTML;

        this.outerHTML =
            `<a class="mdl-navigation__link" href="${href}">${content}</a>`;
    }
}


