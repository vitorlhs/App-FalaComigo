/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCMenuSurfaceFoundation } from '../../menusurface/lib/foundation.js';
import { cssClasses, numbers, strings } from './constants.js';
const LIST_ITEM_DISABLED_CLASS = 'md3-list-item--disabled';
export class MDCMenuFoundation {
    constructor(adapter) {
        this.closeAnimationEndTimerId = 0;
        this.selectedIndex = -1;
        this.adapter = { ...MDCMenuFoundation.defaultAdapter, ...adapter };
    }
    static get cssClasses() {
        return cssClasses;
    }
    static get strings() {
        return strings;
    }
    static get numbers() {
        return numbers;
    }
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    static get defaultAdapter() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClassToElementAtIndex: () => undefined,
            removeClassFromElementAtIndex: () => undefined,
            addAttributeToElementAtIndex: () => undefined,
            removeAttributeFromElementAtIndex: () => undefined,
            getAttributeFromElementAtIndex: () => null,
            elementContainsClass: () => false,
            closeSurface: () => undefined,
            getElementIndex: () => -1,
            notifySelected: () => undefined,
            getMenuItemCount: () => 0,
            getSelectedSiblingOfItemAtIndex: () => -1,
            isSelectableItemAtIndex: () => false,
        };
        // tslint:enable:object-literal-sort-keys
    }
    destroy() {
        if (this.closeAnimationEndTimerId) {
            clearTimeout(this.closeAnimationEndTimerId);
        }
        this.adapter.closeSurface();
    }
    handleKeydown(evt) {
        const { key, keyCode } = evt;
        const isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter.closeSurface(/** skipRestoreFocus */ true);
        }
    }
    handleItemAction(listItem) {
        const index = this.adapter.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter.notifySelected({ index });
        const skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings.SKIP_RESTORE_FOCUS) === 'true';
        this.adapter.closeSurface(skipRestoreFocus);
        // Wait for the menu to close before adding/removing classes that affect
        // styles.
        this.closeAnimationEndTimerId = setTimeout(() => {
            // Recompute the index in case the menu contents have changed.
            const recomputedIndex = this.adapter.getElementIndex(listItem);
            if (recomputedIndex >= 0 &&
                this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
                this.setSelectedIndex(recomputedIndex);
            }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    }
    /** @return Index of the currently selected list item within the menu. */
    getSelectedIndex() {
        return this.selectedIndex;
    }
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    setSelectedIndex(index) {
        this.validatedIndex(index);
        if (!this.adapter.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        const prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings.ARIA_CHECKED_ATTR);
            this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter.addClassToElementAtIndex(index, cssClasses.MENU_SELECTED_LIST_ITEM);
        this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_CHECKED_ATTR, 'true');
        this.selectedIndex = index;
    }
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    setEnabled(index, isEnabled) {
        this.validatedIndex(index);
        if (isEnabled) {
            this.adapter.removeClassFromElementAtIndex(index, LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter.addClassToElementAtIndex(index, LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'true');
        }
    }
    validatedIndex(index) {
        const menuSize = this.adapter.getMenuItemCount();
        const isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    }
}
//# sourceMappingURL=foundation.js.map