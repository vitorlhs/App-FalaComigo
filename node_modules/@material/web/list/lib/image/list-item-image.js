/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class ListItemImage extends LitElement {
    constructor() {
        super(...arguments);
        this.media = 'image';
        this.image = '';
    }
    /** @soyTemplate */
    render() {
        return html `
        <img src="${this.image}" alt="${ifDefined(this.altText)}"
         class="md3-list-item__image" />
      `;
    }
}
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemImage.prototype, "media", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemImage.prototype, "image", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemImage.prototype, "altText", void 0);
//# sourceMappingURL=list-item-image.js.map