/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MenuButton } from './lib/menu-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-menu-button': MdMenuButton;
    }
}
export declare class MdMenuButton extends MenuButton {
    static styles: import("lit").CSSResult[];
}
