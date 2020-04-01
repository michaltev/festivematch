import React from 'react';
import './ChooseArtistsForm.css';
import ArtistsSearch from '../Autocomplete/ArtistsSearch';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class ChooseArtistsForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			favbandid: props.favbandid,
			secondArtist: {}
		};
	}

	initSecondArtist = () => {
		this.setState({secondArtist : {}});	 
	}

	setSecondArtist = (artistID, artistName) => {
		this.setState({secondArtist : {id: artistID, name: artistName}});
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
					<ArtistsSearch initSecondArtist={this.initSecondArtist} setSecondArtist={this.setSecondArtist}/>
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