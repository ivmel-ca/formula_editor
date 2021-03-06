
import React from 'react';
import { func, string, bool } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ContentEditable from 'react-contenteditable';
import ErrorIcon from '@material-ui/icons/Error';
import { font, error } from './colors';

const styles = {
    root: {
        display: 'flex',
        fontSize: '1.125rem',
    },
    focusedPadding: {
        padding: '8px 15px 8px 15px'
    },
    inactivePadding: {
        padding: '9px 16px 9px 16px'
    },
    editor: {
        lineHeight: '29px',
        verticalAlign: 'middle',
        display: 'inline-block',
        width: '100%',
        fontWeight: 500,
        fontSize: 'inherit',
        backgroundColor: 'white',
        '&:focus': {
            outline: '0px solid transparent !important'
        },
        '&:empty': {
            '&:after': {
                content: 'var(--placeholder)',
                display: 'block',
                fontWeight: 400,
                color: font,
                opacity: 0.4,
                fontSize: '1.000rem'
            }
        },
        '& .formula-editor-formula-super': {
            '&:empty': {
                '&:after': {
                    content: '"super"',
                    display: 'block',
                    fontWeight: 500,
                    color: font,
                    opacity: 0.4,
                    fontSize: '65%'
                }
            },
        },
        '& .formula-editor-formula-sub': {
            '&:empty': {
                '&:after': {
                    content: '"sub"',
                    display: 'block',
                    fontWeight: 500,
                    color: font,
                    opacity: 0.4,
                    fontSize: '65%'
                }
            },
        },
    },
    errorPlace: {
        width: 32,
        height: 48,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        fontSize: 18,
        color: error
    }
};

const FormulaEditorInput = ({ editorValue, onChange, focused, placeholder = '', error, onKeyUp, onMouseUp, classes }) => {
    return (
        <div className={classes.root}>
            <ContentEditable
                tagName='article'
                style={{ '--placeholder': `"${placeholder}"` }}
                className={classNames(classes.editor, focused ? classes.focusedPadding : classes.inactivePadding)}
                onChange={onChange}
                html={editorValue}
                onKeyUp={onKeyUp}
                onMouseUp={onMouseUp}
            />
            {error &&
                <div className={classes.errorPlace}>
                    <ErrorIcon classes={{ root: classes.icon }} />
                </div>
            }
        </div>
    )
}
FormulaEditorInput.propTypes = {
    editorValue: string.isRequired,
    placeholder: string,
    focused: bool,
    error: bool,
    onChange: func.isRequired
};

export default withStyles(styles)(FormulaEditorInput);
