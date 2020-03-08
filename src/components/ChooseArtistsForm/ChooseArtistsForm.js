import React from 'react';
import './ChooseArtistsForm.css';

const ChooseArtistsForm = ({onInputChange, onButtonSubmit}) =>
{
	return (
		<div>
			<p className='f3'>
			{'This is gonna find your fastival'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className='f4 grow w-30 link ph3 pv2 dib white bg-pink' onClick={onButtonSubmit}>Find by artists</button>
				</div>
			</div>
		</div>

		)
}

export default ChooseArtistsForm