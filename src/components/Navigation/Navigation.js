import React from 'react';

const Navigation = ({onRouteChanged}) =>
{
	return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p className='f3 link dim black underline pa3 pointer'
				onClick={() => onRouteChanged('signin')}>
				Sign Out
			</p>
		</nav>

		)
}

export default Navigation