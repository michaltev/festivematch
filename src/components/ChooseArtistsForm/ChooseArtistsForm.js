import React from 'react';
import './ChooseArtistsForm.css';
import ArtistsOptions from '../Autocomplete/ArtistsOptions'

class ChooseArtistsForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid,
			artists: []
		};
	}

	onInputChange = (event) => {
		const name = event.target.value;

		fetch(`http://localhost:3000/artists/${name}`, {
          method: 'get',
          headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => {this.setState({artists : data})});

        
	}

	onButtonAddArtists = (event) => {
		console.log('add artists');
	}

	render(){

		return (
		<div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<p className='f3 white ma1'>
						{`Any other artists you're interested in?`}
					</p>
					<input className='f4 pa2 w-75 center' 
						   type='text'
						   placeholder="Colaboration with..." 
						   onChange={this.onInputChange} />
				    <ArtistsOptions results={this.state.artists}/>
					<button className='f4 grow w-25 link ph3 pv2 dib white bg-pink' 
							onClick={this.onButtonAddArtists}>
						Add artist
					</button>
				</div>
			</div>
			<p className='f3 link dim black db pointer' onClick={this.props.onButtonSearch}>
			{'Lets find you a fastival!'}
			</p>
		</div>

		)
	}
}

export default ChooseArtistsForm