import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			registerEmail: '',
			registerName: '',
			registerPassword: ''
		};
	}

	onEmailChange  = (event) => {
		this.setState({registerEmail : event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword : event.target.value});
	}

	onNameChange = (event) => {
		this.setState({registerName: event.target.value});
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.registerEmail,
				name: this.state.registerName,
				password: this.state.registerPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user){
				this.props.loadUser(user);
				this.props.onRouteChanged('home');
			}
		});
	}

	render() {
		return (
		<main className="pa4 black-80">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        		type="email" 
		        		name="email-address"  
		        		id="email-address"
		        		onChange={this.onEmailChange}/>
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        		type="text" 
		        		name="name"  
		        		id="name"
		        		onChange={this.onNameChange}/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        		type="password" 
		        		name="password"  
		        		id="password"
		        		onChange={this.onPasswordChange}/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      			type="submit" 
		      			value="Register"
		      			onClick={this.onSubmitRegister}/>
		    </div>
		  </div>
		</main>

	)
	}
}

export default Register