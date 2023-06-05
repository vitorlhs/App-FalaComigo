/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { List } from './lib/list.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list': MdList;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdList extends List {
    static styles: import("lit").CSSResult[];
}
