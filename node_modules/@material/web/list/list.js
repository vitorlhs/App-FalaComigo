/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { List } from './lib/list.js';
import { styles } from './lib/list-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdList = class MdList extends List {
};
MdList.styles = [styles];
MdList = __decorate([
    customElement('md-list')
], MdList);
export { MdList };
//# sourceMappingURL=list.js.map