import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

class ArtistsOptions extends React.Component {

	render(){
		const classes = makeStyles(theme => ({
										  root: {
										    width: '100%',
										    backgroundColor: 'transparent'
										  },
										}));

		let options = [];
		options = this.props.results.map(r => (
		    <ListItem key={r.id} id={r.id} onClick={() => this.props.onArtistClick(r)}>
	        	<ListItemText className='center white f4' primary={r.name} style={{'textAlignLast': 'center'}} />
	      </ListItem>
		  ));

	  	return <List className={classes.root} aria-label="contacts">{options}</List>
	}
}

export default ArtistsOptions