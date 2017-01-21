export class PageContent extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;
        this.outerHTML =
            `<div class="page-content">
                ${content}
			</div>`;
    }
}

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

export class FixedHeaderLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let title = this.getAttribute('title') || '';
        let classAttribute = this.getAttribute('class') || '';
        classAttribute = `class="${classAttribute} mdl-layout mdl-layout--fixed-header mdl-js-layout"`;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let navContent = el.querySelector('mdl-navigation').outerHTML;
        let navLinks = el.querySelector('mdl-navigation').innerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">${title}</span>
                        <div class="mdl-layout-spacer"></div>
                        <nav class="mdl-navigation mdl-layout--large-screen-only">
                            ${navLinks}
                        </nav>
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

export class ScrollingHeaderLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let title = this.getAttribute('title') || '';
        let classAttribute = this.getAttribute('class') || '';
        classAttribute = `class="${classAttribute} mdl-layout mdl-js-layout"`;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let navContent = el.querySelector('mdl-navigation').outerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                <header class="mdl-layout__header mdl-layout__header--scroll">
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

export class WaterfallHeaderLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let title = this.getAttribute('title') || '';
        let classAttribute = this.getAttribute('class') || '';
        classAttribute = `class="${classAttribute} mdl-layout mdl-js-layout"`;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let navContent = el.querySelector('mdl-navigation').outerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                <header class="mdl-layout__header mdl-layout__header--waterfall">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">${title}</span>
                        <div class="mdl-layout-spacer"></div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                    mdl-textfield--floating-label mdl-textfield--align-right">
                            <label class="mdl-button mdl-js-button mdl-button--icon" for="waterfall-exp">
                                <i class="material-icons">search</i>
                            </label>
                            <div class="mdl-textfield__expandable-holder">
                                <input class="mdl-textfield__input" type="text" name="sample" id="waterfall-exp">
                            </div>
                        </div>
                    </div>
                    <div class="mdl-layout__header-row">
                        <div class="mdl-layout-spacer"></div>
                        ${navContent}
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">Title</span>
                    ${navContent}
                </div>
                ${layoutContent}
             </div>`;
    }
}

export class ScrollableTabLayout extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let title = this.getAttribute('title') || '';
        let classAttribute = this.getAttribute('class') || '';
        classAttribute = `class="${classAttribute} mdl-layout mdl-js-layout mdl-layout--fixed-header"`;
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let scrollTabBar = el.querySelector('mdl-tab-bar').outerHTML;
        let layoutContent = el.querySelector('mdl-layout-content').outerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">${title}</span>
                    </div>
                    ${scrollTabBar}
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${title}</span>
                </div>
                ${layoutContent}
             </div>`;
    }
}

export class LayoutTabBar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                ${content}
             </div>`;
    }
}

export class LayoutTab extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let isActive = this.getAttribute('active') !== null && this.getAttribute('active') !== ''
                       ? 'is-active'
                       : '';
        let classAttribute = this.getAttribute('class') || '';
        let content = this.innerHTML;
        classAttribute = `class="mdl-layout__tab ${isActive}"`;

        this.outerHTML = `<a href="${href}" ${classAttribute}>${content}</a>`;
    }
}

export class LayoutTabPanel extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('active');
        let isActive = this.getAttribute('active') !== null && this.getAttribute('active') !== ''
                       ? 'is-active'
                       : '';
        let classAttribute = this.getAttribute('class') || '';
        let content = this.innerHTML;
        classAttribute = `class="mdl-layout__tab-panel ${isActive}"`;

        this.outerHTML =
            `<section ${classAttribute} id="${id}">
                ${content}
             </section>`;
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
                ${content}
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

export class Tabs extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tabs mdl-js-tabs ';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'ripple':
                classAttribute += 'mdl-js-ripple-effect ';
                continue;
            }

        }

        classAttribute = `class="${classAttribute}" `;
        let content = this.innerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                ${content}
             </div>`;
    }
}

export class TabBar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-tabs__tab-bar">
                ${content}
             </div>`;
    }
}

export class Tab extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tabs__tab ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'active':
                classAttribute += 'is-active ';
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
            `<a ${attributeList}>${content}</a>`;
    }
}

export class TabPanel extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let classAttribute = 'mdl-tabs__panel ';
        let attributeList = '';

        for (const attribute of this.attributes) {

            switch (attribute.name) {
            case 'active':
                classAttribute += 'is-active ';
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
            `<div ${attributeList}>
                ${content}
            </div>`;
    }
}

export class MegaFooter extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<footer class="mdl-mega-footer">
                ${content}
             </footer>`;
    }
}

export class FooterLogo extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-logo">
                ${content}
             </div>`;
    }
}

export class FooterMiddleSection extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-mega-footer__middle-section">
                ${content}
             </div>`;
    }
}

export class FooterBottomSection extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let logoContent = el.querySelector('.mdl-logo').outerHTML;
        let content = el.querySelector('mdl-footer-list-contents').innerHTML;

        this.outerHTML =
            `<div class="mdl-mega-footer__bottom-section">
                ${logoContent}
                <ul class="mdl-mega-footer__link-list">
                    ${content}
                </ul>
             </div>`;
    }
}

export class FooterDropDownSection extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let heading = '';

        for (const attribute of this.attributes) {

            if (attribute.name === 'heading') {
                heading = attribute.value;
            }

        }

        let content = this.innerHTML;

        this.outerHTML =
            `<div class="mdl-mega-footer__drop-down-section">
                 <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
                 <h1 class="mdl-mega-footer__heading">${heading}</h1>
                 <ul class="mdl-mega-footer__link-list">
                    ${content}
                 </ul>
             </div>`;
    }

}

export class MiniFooter extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var el = document.createElement('html');
        el.innerHTML = this.innerHTML;
        let logoContent = el.querySelector('.mdl-logo').outerHTML;
        let content = el.querySelector('mdl-footer-list-contents').innerHTML;

        this.outerHTML =
            `<footer class="mdl-mini-footer">
                <div class="mdl-mini-footer__left-section">
                    ${logoContent}
                    <ul class="mdl-mini-footer__link-list">
                        ${content}
                    </ul>
                </div>
             </footer>`;
    }

}
