/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListItemVideo } from './lib/video/list-item-video.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list-item-video': MdListItemVideo;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdListItemVideo extends ListItemVideo {
    static styles: import("lit").CSSResult[];
}
