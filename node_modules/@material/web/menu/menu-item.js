/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles } from '../list/lib/listitem/list-item-styles.css.js';
import { MenuItem } from './lib/menuitem/menu-item.js';
let MdMenuItem = class MdMenuItem extends MenuItem {
};
MdMenuItem.styles = [styles];
MdMenuItem = __decorate([
    customElement('md-menu-item')
], MdMenuItem);
export { MdMenuItem };
//# sourceMappingURL=menu-item.js.map