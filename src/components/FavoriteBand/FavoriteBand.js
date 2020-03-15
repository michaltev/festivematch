import React from 'react';

const FavoriteBand = ({name, favBandID}) =>
{
	return (
		<div>
			<div className='white f3'>
			{`${name} , your favorite band is `}
			</div>
			<div className='white f1'>
			{favBandID}
			</div>
		</div>

		)
}

export default FavoriteBand