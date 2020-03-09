import React from 'react';

const Navigation = ({onRouteChanged, isSignedIn}) =>
{
		if (isSignedIn)
		{
			return (
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChanged('signout')}>
					Sign Out
				</p>
			</nav>
			)
		}
		else
		{
			return (
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChanged('signin')}>
					Sign In
				</p>
				<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChanged('register')}>
					Register
				</p>
			</nav>
			)
		}
}

export default Navigation