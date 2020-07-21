
import React, { Fragment } from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import {popperBorderColor} from './colors';
import Paper from '@material-ui/core/Paper';
import SquareButton from './SquareButton';

const styles = {
    paper: {
        width: 295,
        height: 246,
        overflow: 'auto',
        border: `1px solid ${popperBorderColor}`,
        padding: 24
    }
};

const InsertContent = ({characterList, onCharacterSelect, classes}) => (
    <Paper className = {classes.paper}>
        {characterList.map(block => <ContentBlock key = {block.title} block = {block} onCharacterSelect = {onCharacterSelect}/>)}
    </Paper>
);

const contentBlockStyle = {
    title: {
        fontSize: '0.875rem',
        marginBottom: 8
    },
    button: {
        opacity: 1
    },
    gridlist: {
        marginBottom: '20px !important'
    }
}

const ContentBlock = withStyles(contentBlockStyle)(({block, onCharacterSelect, classes}) => (
    <Fragment>
        <Typography variant = 'h6' classes = {{root: classes.title}}>{block.title}</Typography>
        <GridList classes = {{root: classes.gridlist}}>
            {block.characters.map(character => <SquareButton key = {character.code} onMouseDown = {onCharacterSelect(character.code)} icon = {<div dangerouslySetInnerHTML = {{__html: character.code}}/>} classes = {{root: classes.button}}/>)}
        </GridList>
    </Fragment>
));

InsertContent.propTypes = {
    characterList: arrayOf(
        shape({
            title: string.isRequired,
            characters: arrayOf(
                shape({
                    name: string.isRequired,
                    code: string.isRequired
                })
            )
        })
    ),
    onCharacterSelect: func.isRequired
};

export default withStyles(styles)(InsertContent);
