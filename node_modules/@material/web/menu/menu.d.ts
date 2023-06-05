/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Menu } from './lib/menu.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-menu': MdMenu;
    }
}
export declare class MdMenu extends Menu {
    static styles: import("lit").CSSResult[];
}
