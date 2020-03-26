import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent'
  },
}));

const ArtistsOptions = (props) => {
	const classes = useStyles();
	let options = [];
	options = props.results.map(r => (
	    <ListItem button key={r.id}>
        	<ListItemText className='center white f4' primary={r.name} />
      </ListItem>
	  ))
  return <List component="nav" className={classes.root} aria-label="contacts">{options}</List>
}

export default ArtistsOptions