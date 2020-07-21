
import {CHANGE_FORMULA_EDITOR_FOCUS, GET_FORMULA_EDITOR_STYLE, CHANGE_FORMULA_EDITOR_BUTTON_STATE, CHANGE_SYMBOL_POPOVER_STATE, CHANGE_EMOJI_POPOVER_STATE} from './formulaEditorActionTypes';
import findStyle from './formulaEditorStyleUtil';

const changeFocusAction = focused => ({type: CHANGE_FORMULA_EDITOR_FOCUS, focused});
const getStyleAction = () =>({type: GET_FORMULA_EDITOR_STYLE, styles: findStyle()});
const changeButtonStateAction = format => ({type: CHANGE_FORMULA_EDITOR_BUTTON_STATE, format});
const changeSymbolPopoverStateAction = eventTarget => ({type: CHANGE_SYMBOL_POPOVER_STATE, symbolPopoverAnchor: eventTarget});
const changeEmojiPopoverStateAction = eventTarget => ({type: CHANGE_EMOJI_POPOVER_STATE, emojiPopoverAnchor: eventTarget});

export {changeFocusAction, getStyleAction, changeButtonStateAction, changeSymbolPopoverStateAction, changeEmojiPopoverStateAction};