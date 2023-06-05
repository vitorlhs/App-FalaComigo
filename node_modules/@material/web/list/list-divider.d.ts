/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListDivider } from './lib/divider/list-divider.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list-divider': MdListDivider;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdListDivider extends ListDivider {
    static styles: import("lit").CSSResult[];
}
