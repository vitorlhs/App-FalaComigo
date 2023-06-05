/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, PropertyValues } from 'lit';
import { Menu } from './menu.js';
/**
 * Menu button component that automatically attaches a slotted menu to the
 * slotted button.
 */
export declare class MenuButton extends LitElement {
    protected readonly buttonAssignedElements: HTMLElement[];
    protected readonly menuAssignedElements: HTMLElement[];
    get button(): HTMLElement;
    get menu(): Menu;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValues): void;
    /**
     * If key event is ArrowUp or ArrowDown, opens the menu.
     */
    private handleButtonKeydown;
    /**
     * Toggles the menu on button click.
     */
    private handleButtonClick;
}
