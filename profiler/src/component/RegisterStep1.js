import React from 'react';

class Register1 extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			step: 1,
			personalInfo:{
				name:"",
			    email:'',
			    password:''
			}
			
		}
	}
    onNameChange = (event)=>{
		this.setState({name: event.target.value})
	}
    onEmailChange = (event)=>{
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event)=>{
		this.setState({password: event.target.value})
	}
    onButtonSubmit = () => {
    	this.props.onNextStep(2);

	}

	render(){
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onNameChange} type="text" name="naam"  id="name"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="Age">Age</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" onChange= {this.onEmailChange} type="date" name="age"  id="Age"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="location">Location</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onPasswordChange} type="text" name="location"  id="location"/>
			      </div> 
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="profession">Profession</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onPasswordChange} type="text" name="profession"  id="profession"/>
			      </div>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="about">About me</label>
			        <textarea rows="15" className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onPasswordChange} type="text" name="about" placeholder="Tell us a bit about yourself.." id="about"/>
			      </div> 
			   </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={()=> this.props.onNextStep(2)}value="Next"/>
			    </div>
			  </div>
			</main>
		</article>

		);
   }
}

export default Register1;