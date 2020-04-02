import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';

class FavoriteBand extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid,
			favbandname: props.favbandname,
			hasfavband: (props.favbandid === "0") ? false : true
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
				this.setState({favbandid: user.favbandid, favbandname:user.favbandname, hasfavband:true});
			}
		});
	}

	onWantToChange = () => {
		this.setState({hasfavband: false});
	}

	render(){
		if(this.state.hasfavband === false)
		{
			return (
				<div>
					<div className='white f3'>
					{`${this.state.name} , you haven't choose your favorite artist! Do it now: `}
					</div>
					<Autocomplete onBandChosen={this.onBandChosen} 
								favbandid={this.state.favbandid}/>
				</div>
			)
		}
		else
		{
			return (
				<div>
					<div className='white f3'>
					{`${this.state.name} , your favorite artist is `}
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