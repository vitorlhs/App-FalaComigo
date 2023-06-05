/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, TemplateResult } from 'lit';
/** @soyCompatible */
export declare class ListItemAvatar extends LitElement {
    avatar: string;
    altText?: string;
    /**
     * @soyTemplate
     * @soyClasses imageClasses: .md3-list-item__avatar
     */
    render(): TemplateResult;
}
