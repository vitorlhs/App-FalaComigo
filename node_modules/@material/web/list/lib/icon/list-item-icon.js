/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
/** @soyCompatible */
export class ListItemIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.media = 'icon';
    }
    /** @soyTemplate */
    render() {
        return html `
      <span class="md3-list-item__icon"><slot></slot></span>
    `;
    }
}
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemIcon.prototype, "media", void 0);
//# sourceMappingURL=list-item-icon.js.map