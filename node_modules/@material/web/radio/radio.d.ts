/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Radio } from './lib/radio.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-radio': MdRadio;
    }
}
/** @soyCompatible */
export declare class MdRadio extends Radio {
    static styles: import("lit").CSSResult[];
}
