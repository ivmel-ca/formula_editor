
import {last, curry} from 'ramda';
import { isFirefox } from './formulaEditorBrowserUtils';
import '../components/styles/commands.css'

const formulaHTMLForFirefox =
    `<div class = "formula-editor-formula" style = "display: inline-block; vertical-align: text-top">
        <div class = "formula-editor-formula-super" style = "font-size: 65%; line-height: 100%; min-height: 10px">m</div>
        <div class = "formula-editor-formula-sub" style = "font-size: 65%; line-height: 100%; min-height: 10px">n</div>
    </div>&nbsp;`;

const formulaHTMLForOtherBrowsers =
    `<div class = "formula-editor-formula" style = "display: inline-block; vertical-align: text-top">
        <div class = "formula-editor-formula-super" style = "font-size: 65%; line-height: 100%; min-height: 10px"></div>
        <div class = "formula-editor-formula-sub" style = "font-size: 65%; line-height: 100%; min-height: 10px"></div>
    </div>&nbsp;`;

const changeToFormula = event => {
    event.preventDefault();
    insertFormula();
    setCursorPosition();
    saveEditorValue();
};

const insertFormula = () => {
    const selection = window.getSelection();
    if(selection.type === 'None'){
        return;
    }
    const range = window.getSelection().getRangeAt(0);
    range.insertNode(createFormulaElement());
    selection.removeAllRanges();
    selection.addRange(range);
};

const createFormulaElement = () => {
    const template = document.createElement('template');
    template.innerHTML = isFirefox() ? formulaHTMLForFirefox : formulaHTMLForOtherBrowsers;
    return template.content;
};

const setCursorPosition = () => {
    const superscriptElement = document.getElementsByClassName('formula-editor-formula-sub');
    const range = document.createRange();
    const selection = window.getSelection();
    if(selection.type === 'None'){
        return;
    }
    range.setStart(last(superscriptElement), 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};

/////// Fraction method ////////
const fractionHTML =
    `&nbsp;<span class="formula-editor__buttons-fraction">
        <div>1</div>
        <div>2</div>
    </span>&nbsp;`;

const addFraction = event => {
    event.preventDefault();
    insertFraction();
    setCursorPositionFraction();
    saveEditorValue();
};

const insertFraction = () => {
    const selection = window.getSelection();
    if(selection.type === 'None'){
        return;
    }
    const range = window.getSelection().getRangeAt(0);
    range.insertNode(createFractionElement());
    selection.removeAllRanges();
    selection.addRange(range);
};

const createFractionElement = () => {
    const template = document.createElement('template');
    template.innerHTML = fractionHTML;
    return template.content;
};

const setCursorPositionFraction = () => {
    const superscriptElement = document.getElementsByClassName('formula-editor__buttons-fraction');
    const range = document.createRange();
    const selection = window.getSelection();
    if(selection.type === 'None'){
        return;
    }
    range.setStart(last(superscriptElement), 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};

const saveEditorValue = () => document.execCommand('insertHTML', false, ''); // execCommand fires onChange while other html manipulation not.

const addSimpleStyle = (event, style) => {
    event.preventDefault();
    console.log('Change style>>>', style);

    document.execCommand(style, false, null);;
};

const addRootCharacter = (event) => {
    event.preventDefault();
    document.execCommand('insertHTML', true, `<span class="formula-editor__buttons-root">&#8730;</span>&nbsp;`);
};

const addCharacter = curry((character, event) => {
    event.preventDefault();
    document.execCommand('insertHTML', true, character);
});

export { changeToFormula, addCharacter, addSimpleStyle, addFraction, addRootCharacter };
