
import createReducer from './createReducer';
import { evolve, includes, equals, not, always } from 'ramda';
import { CHANGE_FORMULA_EDITOR_FOCUS, GET_FORMULA_EDITOR_STYLE, CHANGE_FORMULA_EDITOR_BUTTON_STATE, CHANGE_SYMBOL_POPOVER_STATE, CHANGE_EMOJI_POPOVER_STATE } from './formulaEditorActionTypes';

const initialState = {
    focused: false,
    isItalic: false,
    isSubscript: false,
    isSuperscript: false,
    isSymbol: false,
    isEmoji: false,
    symbolPopoverAnchor: null,
    emojiPopoverAnchor: null
};

const changeFocus = (state, action) =>
    evolve({
        focused: () => action.focused
    }, state);

const getStyle = (state, action) =>
    evolve({
        isItalic: () => includes('B', action.styles),
        isSuperscript: () => includes('SUP', action.styles),
        isSubscript: () => includes('SUB', action.styles),
    }, state);

const changeButtonState = (state, action) =>
    evolve({
        isItalic: () => equals(action.format, 'bold') ? not(state.isItalic) : state.isItalic,
        isSubscript: () => equals(action.format, 'subscript') ? not(state.isSubscript) : state.isSubscript,
        isSuperscript: () => equals(action.format, 'superscript') ? not(state.isSuperscript) : state.isSuperscript,
    }, state);

const changeSymbolPopoverState = (state, action) =>
    evolve({
        symbolPopoverAnchor: () => action.symbolPopoverAnchor,
        isSymbol: () => !!action.symbolPopoverAnchor,
        emojiPopoverAnchor: always(null),
        isEmoji: always(false)
    }, state);

const changeEmojiPopoverState = (state, action) =>
    evolve({
        emojiPopoverAnchor: () => action.emojiPopoverAnchor,
        isEmoji: () => !!action.emojiPopoverAnchor,
        symbolPopoverAnchor: always(null),
        isSymbol: always(false)
    }, state);

const actionHandlers = {
    [CHANGE_FORMULA_EDITOR_FOCUS]: changeFocus,
    [GET_FORMULA_EDITOR_STYLE]: getStyle,
    [CHANGE_FORMULA_EDITOR_BUTTON_STATE]: changeButtonState,
    [CHANGE_SYMBOL_POPOVER_STATE]: changeSymbolPopoverState,
    [CHANGE_EMOJI_POPOVER_STATE]: changeEmojiPopoverState
};

const formulaEditor = createReducer(initialState, actionHandlers);

export default formulaEditor;
export {initialState};