import React from 'react';
import './ChooseArtistsForm.css';

const ChooseArtistsForm = ({onInputChange, onButtonSubmit}) =>
{
	return (
		<div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<p className='f3 white ma1'>
						{`Any other artists you're interested in?`}
					</p>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className='f4 grow w-30 link ph3 pv2 dib white bg-pink' onClick={onButtonSubmit}>
						Find by artists
					</button>
				</div>
			</div>
			<p className='f3'>
			{'Lets find you a fastival!'}
			</p>
		</div>

		)
}

export default ChooseArtistsForm