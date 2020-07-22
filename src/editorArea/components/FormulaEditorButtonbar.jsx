
import React from 'react';
import { bool, func, element } from 'prop-types';
import FormatItalicIcon from '@material-ui/icons/FormatBold';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { withStyles } from '@material-ui/core/styles';
import SquareButton from './SquareButton';
import VerticalDivider from './VerticalDivider';
import subscripticon from './images/subscript.svg';
import fractionicon from './images/fraction.png';
import superscripticon from './images/superscript.svg';
import supersubscripticon from './images/supersubscript.svg';
import { inactiveBorder, buttonBorder } from './colors';

const styles = {
    root: {
        borderTop: `1px solid ${inactiveBorder}`,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor: 'white'
    },
    buttonSize: {
        height: 32,
        width: 32
    },
    squareButtonRoot: {
        marginRight: 3
    },
    iconRoot: {
        height: 23
    },
    divider: {
        height: 20,
        borderColor: buttonBorder,
        marginLeft: 8,
        marginRight: 8
    }
};

const FormulaEditorButtonbar = ({isItalic, isSubscript, isSuperscript, isSymbol, isEmoji, addSimpleFormat, addFormula, addFraction, onSymbolClick, symbolPopover, onEmojiClick, emojiPopover, classes}) => (
    <div className = {classes.root} >
        <SquareButton onMouseDown = { addSimpleFormat('subscript') } focused = {isSubscript} icon = {<img src = {subscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { addSimpleFormat('superscript') } focused = {isSuperscript} icon = {<img src = {superscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
        {/* <VerticalDivider classes = {{root: classes.divider}}/> */}
        <SquareButton onMouseDown = { addFormula }  icon = {<img src = {supersubscripticon} className = {classes.iconRoot} alt = ''/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { addFraction }  icon = {<img src = {fractionicon} className = {classes.iconRoot} alt = ''/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { addSimpleFormat('bold') } focused = {isItalic} icon = {<FormatItalicIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { onSymbolClick }  focused = {isSymbol} icon = {<div dangerouslySetInnerHTML = {{__html: '&#120512;'}}/>} classes = {{root: classes.squareButtonRoot}}/>
        {/* <SquareButton onMouseDown = { onEmojiClick } focused = {isEmoji} icon = {<InsertEmoticonIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/> */}
        {symbolPopover}
        {/* {emojiPopover} */}
    </div>
);

FormulaEditorButtonbar.propTypes = {
    isItalic: bool,
    isSubscript: bool,
    isSuperscript: bool,
    isSymbol: bool,
    addSimpleFormat: func.isRequired,
    addFormula: func.isRequired,
    onSymbolClick: func.isRequired,
    symbolPopover: element.isRequired
};

export default withStyles(styles)(FormulaEditorButtonbar);
