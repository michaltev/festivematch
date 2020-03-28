import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.css';

const Navigation = ({onRouteChanged, isSignedIn}) =>
{
		if (isSignedIn)
		{
			return (
			<nav>
				<Logo/>
				<div className="links">
					<p className='f3 link dim black underline pa3 pointer'
						onClick={() => onRouteChanged('signout')}>
						Sign Out
					</p>
				</div>
			</nav>
			)
		}
		else
		{
			return (
			<nav>
				<Logo />
				<div className="links"> 
					<p className='f3 link dim black underline pa3 pointer'
						onClick={() => onRouteChanged('signin')}>
						Sign In
					</p>
					<p className='f3 link dim black underline pa3 pointer'
						onClick={() => onRouteChanged('register')}>
						Register
					</p>
				</div>
			</nav>
			)
		}
}

export default Navigation