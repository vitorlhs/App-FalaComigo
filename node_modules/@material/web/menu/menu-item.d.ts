/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MenuItem } from './lib/menuitem/menu-item.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-menu-item': MdMenuItem;
    }
}
export declare class MdMenuItem extends MenuItem {
    static styles: import("lit").CSSResult[];
}
