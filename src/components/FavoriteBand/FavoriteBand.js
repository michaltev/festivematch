import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';

let bands = [];

class FavoriteBand extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid,
			favbandname: props.favbandname
		};
	}

	onBandChosen = (event, value) => {
		fetch('http://localhost:3000/favband', {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				id: this.state.id,
				bandID: value.id,
				bandName: value.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.setState({favbandid: user.favbandid, favbandname:user.favbandname});
			}
		});
	}

	onWantToChange = () => {
		this.setState({favbandid: '0', favbandname: ''});
	}

	render(){
		if(this.state.favbandid === '0')
		{
			return (
				<div>
					<div className='white f3'>
					{`${this.state.name} , you haven't choose your favorite band! Do it now: `}
					</div>
					<Autocomplete onBandChosen={this.onBandChosen}/>
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
					{this.state.favbandname}
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