import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const bands = [{name:'Alter Bridge', id:1}, 
					{name:'Aerosmith', id:2},
					{name:'Bon Jovi', id:3}];

class FavoriteBand extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid
		};
	}

	onBandChosen = (event, value) => {
		fetch('http://localhost:3000/band', {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				id: this.state.id,
				bandID: value.id
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.setState({favbandid: user.favbandid});
			}
		});
	}

	onWantToChange = () => {
		this.setState({favbandid: '0'});
	}

	render(){
		if(this.state.favbandid === '0')
		{
			return (
				<div>
					<div className='white f3'>
					{`${this.state.name} , you haven't choose your favorite band! Do it now: `}
					</div>
					<Autocomplete
				      id="combo-box-demo"
				      options={bands}
				      getOptionLabel={option => option.name}
				      style={{ width: 300 }}
				      renderInput={params => <TextField {...params} label="Bands" 
				      												variant="outlined" />}
				      onChange={this.onBandChosen}
				      className='center ma2 pa4 br3 shadow-5 bg-light-gray'
				    />
				</div>

			)
		}
		else
		{
			return (
				<div>
					<div className='white f3'>
					{`${this.state.name} , your favorite band is `}
					</div>
					<div className='white f1'>
					{this.state.favbandid}
					<p className="f6 link dim black db pointer"
		      		onClick={this.onWantToChange}>
		      		Want to change the band?
      				</p>
					</div>
				</div>
			)
		}
	}

}


export default FavoriteBand