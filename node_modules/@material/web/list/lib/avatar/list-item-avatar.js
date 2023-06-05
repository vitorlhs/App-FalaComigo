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
export class ListItemAvatar extends LitElement {
    constructor() {
        super(...arguments);
        this.avatar = '';
    }
    /**
     * @soyTemplate
     * @soyClasses imageClasses: .md3-list-item__avatar
     */
    render() {
        return html `
       <img src="${this.avatar}" alt="${ifDefined(this.altText)}"
        class="md3-list-item__avatar" />
     `;
    }
}
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemAvatar.prototype, "avatar", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemAvatar.prototype, "altText", void 0);
//# sourceMappingURL=list-item-avatar.js.map