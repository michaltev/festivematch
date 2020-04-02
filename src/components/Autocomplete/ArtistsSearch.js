import React from 'react';
import ArtistsOptions from './ArtistsOptions';

class ArtistsSearch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			artists: []
		};
	}

	onInputChange = (event) => {
		const name = event.target.value;

		if(name === "")
		{
			this.setState({artists : []})
		}
		else
		{
			fetch(`http://localhost:3000/artists/${name}`, {
		          method: 'get',
		          headers: {'Content-Type':'application/json'}
	        })
	        .then(response => response.json())
	        .then(data => {
	        	this.setState({artists : data})
	        }); 
		}

		this.props.initChosenArtist();	 
	};

	onArtistClick = (value) => {
		document.getElementById("artistNameInput").value = value.name;
		this.setState({artists:[]});

		this.props.setChosenArtist(value.id, value.name);
	};

	render(){
		return (
		<div>
			<input className='f4 pa2 w-75 center' 
				   type='text'
				   id='artistNameInput'
				   placeholder="Collaboration with..." 
				   onChange={this.onInputChange} />
		    <ArtistsOptions results={this.state.artists} onArtistClick={this.onArtistClick}/>
    	</div>
    	)
	}

}

export default ArtistsSearch