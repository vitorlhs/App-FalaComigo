/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, TemplateResult } from 'lit';
/** @soyCompatible */
export declare class ListItemVideo extends LitElement {
    media: string;
    video: string;
    altText?: string;
    /** @soyTemplate */
    render(): TemplateResult;
}
