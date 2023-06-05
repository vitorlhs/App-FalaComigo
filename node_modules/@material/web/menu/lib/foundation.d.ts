/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCMenuAdapter } from './adapter.js';
export declare class MDCMenuFoundation {
    static get cssClasses(): {
        MENU_SELECTED_LIST_ITEM: string;
        MENU_SELECTION_GROUP: string;
        ROOT: string;
    };
    static get strings(): {
        ARIA_CHECKED_ATTR: string;
        ARIA_DISABLED_ATTR: string;
        CHECKBOX_SELECTOR: string;
        LIST_SELECTOR: string;
        SELECTED_EVENT: string;
        SKIP_RESTORE_FOCUS: string;
    };
    static get numbers(): {
        FOCUS_ROOT_INDEX: number;
    };
    private readonly adapter;
    private closeAnimationEndTimerId;
    private selectedIndex;
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    static get defaultAdapter(): MDCMenuAdapter;
    constructor(adapter: Partial<MDCMenuAdapter>);
    destroy(): void;
    handleKeydown(evt: KeyboardEvent): void;
    handleItemAction(listItem: Element): void;
    /** @return Index of the currently selected list item within the menu. */
    getSelectedIndex(): number;
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    setSelectedIndex(index: number): void;
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    setEnabled(index: number, isEnabled: boolean): void;
    private validatedIndex;
}
