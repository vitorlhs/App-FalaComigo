/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { MenuButton } from './lib/menu-button.js';
import { styles } from './lib/menu-button-styles.css.js';
let MdMenuButton = class MdMenuButton extends MenuButton {
};
MdMenuButton.styles = [styles];
MdMenuButton = __decorate([
    customElement('md-menu-button')
], MdMenuButton);
export { MdMenuButton };
//# sourceMappingURL=menu-button.js.map