import React from 'react';
import Register1 from "./RegisterStep1"
import Register2 from "./RegisterStep2"
import Register3 from "./RegisterStep3"

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			step:1,
			personalInfo:{
				name:"",
			    email:'',
			    password:''
			}
			
		}
	}
    onNextStep = (event)=>{
		this.setState({step: event})
	}
    onButtonSubmit = () => {
    	this.props.onRouteChange('home');
	// 	fetch('https://floating-reef-84982.herokuapp.com/registreer',{
	// 		method:'post',
	// 		headers: {'Content-type': 'application/json'},
	// 		body: JSON.stringify({
	// 			email:this.state.email,
	// 			password:this.state.password,
	// 			naam: this.state.naam
	// 		})
	// })
	// 	.then(response => response.json())
	// 	.then(user =>{
	// 		if (user.id){
	// 			this.props.laadUser(user)
	// 		    this.props.onRouteChange('home');
	// 		}
	// 	})
	}

	render(){
	return (
		<div>
		{(this.state.step === 1) ? <Register1 onNextStep={this.onNextStep}/> : (this.state.step === 2) ? <Register2 onNextStep={this.onNextStep}/> : <Register3 onRouteChange={this.onButtonSubmit}/> }
		</div>
		);
   }
}

export default Register;