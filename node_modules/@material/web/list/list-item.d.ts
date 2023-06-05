/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListItem } from './lib/listitem/list-item.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list-item': MdListItem;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdListItem extends ListItem {
    static styles: import("lit").CSSResult[];
}
