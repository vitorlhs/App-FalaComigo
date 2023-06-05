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
export class ListItemVideo extends LitElement {
    constructor() {
        super(...arguments);
        this.media = 'video';
        this.video = '';
    }
    /** @soyTemplate */
    render() {
        return html `
        <img src="${this.video}" alt="${ifDefined(this.altText)}"
         class="md3-list-item__video" />
      `;
    }
}
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemVideo.prototype, "media", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemVideo.prototype, "video", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemVideo.prototype, "altText", void 0);
//# sourceMappingURL=list-item-video.js.map