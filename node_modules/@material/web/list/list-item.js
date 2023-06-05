/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { ListItem } from './lib/listitem/list-item.js';
import { styles } from './lib/listitem/list-item-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItem = class MdListItem extends ListItem {
};
MdListItem.styles = [styles];
MdListItem = __decorate([
    customElement('md-list-item')
], MdListItem);
export { MdListItem };
//# sourceMappingURL=list-item.js.map