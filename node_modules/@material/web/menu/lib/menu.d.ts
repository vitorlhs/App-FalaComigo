/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../list/list.js';
import '../../menusurface/menu-surface.js';
import { LitElement } from 'lit';
import { List } from '../../list/lib/list.js';
import { ListItem } from '../../list/lib/listitem/list-item.js';
import { Corner, MenuSurface } from '../../menusurface/lib/menu-surface.js';
import { MDCMenuAdapter } from './adapter.js';
import { MDCMenuFoundation } from './foundation.js';
interface ActionDetail {
    item: ListItem;
}
/** Element to focus on when menu is first opened. */
export declare type DefaultFocusState = 'NONE' | 'LIST_ROOT' | 'FIRST_ITEM' | 'LAST_ITEM';
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
export declare abstract class Menu extends LitElement {
    protected mdcFoundation: MDCMenuFoundation;
    protected listElementInternal: List | null;
    mdcRoot: MenuSurface;
    slotElement: HTMLSlotElement | null;
    anchor: HTMLElement | null;
    ariaLabel: string;
    open: boolean;
    quick: boolean;
    corner: Corner;
    x: number | null;
    y: number | null;
    absolute: boolean;
    activatable: boolean;
    fixed: boolean;
    forceGroupSelection: boolean;
    fullwidth: boolean;
    flipMenuHorizontally: boolean;
    stayOpenOnBodyClick: boolean;
    skipRestoreFocus: boolean;
    defaultFocus: DefaultFocusState;
    protected listUpdateComplete: null | Promise<unknown>;
    protected get listElement(): List;
    get items(): ListItem[];
    render(): import("lit-html").TemplateResult<1>;
    protected getMenuItemTagName(): string;
    protected createAdapter(): MDCMenuAdapter;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onAction(evt: CustomEvent<ActionDetail>): void;
    protected onOpened(): void;
    protected onClosed(): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected firstUpdated(): Promise<void>;
    close(): void;
    show(): void;
}
export {};
