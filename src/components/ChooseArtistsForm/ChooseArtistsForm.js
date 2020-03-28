import React from 'react';
import './ChooseArtistsForm.css';
import ArtistsOptions from '../Autocomplete/ArtistsOptions';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class ChooseArtistsForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid,
			artists: [],
			secondArtist: {}
		};
	}

	onInputChange = (event) => {
		const name = event.target.value;

		if(name === "")
		{
			this.setState({artists : [], secondArtist : {}})
		}
		else
		{
			fetch(`http://localhost:3000/artists/${name}`, {
		          method: 'get',
		          headers: {'Content-Type':'application/json'}
	        })
	        .then(response => response.json())
	        .then(data => {
	        	this.setState({artists : data, secondArtist : {}})
	        }); 
		}		 
	}

	onArtistClick = (value) => {
		document.getElementById("secondArtist").value = value.name;
		this.setState({secondArtist : {id: value.id, name: value.name}, artists:[]});
	}

	render(){

		return (
		<div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<div className='alertline ma1'>
						<p className='f3 white w-100'>
							{`Any other artists you're interested in?`}
						</p>
						<HighlightOffIcon className={this.state.secondArtist.id ? 'transparent' : 'pink'}/>
						<CheckCircleOutlineIcon className={this.state.secondArtist.id ? 'yellow' : 'transparent'}/>
					</div>
					<input className='f4 pa2 w-75 center' 
						   type='text'
						   id='secondArtist'
						   placeholder="Collaboration with..." 
						   onChange={this.onInputChange} />
				    <ArtistsOptions results={this.state.artists} onArtistClick={this.onArtistClick}/>
				</div>
			</div>
			<p className='f3 link dim black db pointer' 
			   onClick={() => this.props.onButtonSearch(this.state.secondArtist)}>
			{'Lets find you a fastival!'}
			</p>
		</div>

		)
	}
}

export default ChooseArtistsForm