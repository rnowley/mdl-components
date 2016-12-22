export class Layout extends HTMLElement {

	constructor() {
		super();
	}

	createdCallback() {
		let title = this.getAttribute('title') || '';
		let content = this.innerHTML;

		this.outerHTML =
			`<div class="mdl-layout mdl-js-layout">
				<header class="mdl-layout__header mdl-layout__header--transparent">
					<div class="mdl-layout__header-row">
						<span class=mdl-layout-title>${title}</span>
					</div>
					<div class="mdl-layout-spacer"></div>
				</header>
			</div>`;
	}
}