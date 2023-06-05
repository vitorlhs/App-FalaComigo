/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { Menu } from './lib/menu.js';
import { styles } from './lib/menu-styles.css.js';
let MdMenu = class MdMenu extends Menu {
};
MdMenu.styles = [styles];
MdMenu = __decorate([
    customElement('md-menu')
], MdMenu);
export { MdMenu };
//# sourceMappingURL=menu.js.map