import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-bottom/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth';


import './signin.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''

    }
  }

  // handle submit method with arrow function
  handleSubmit = async event => {
    const {email, password} = this.state;

    try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
    } catch (error) {
      console.log(error.message)
    }
    event.preventDefault()

    // clear form after submitting
    this.setState({email: '', password: ''})
  }

  //handle change method with arrow function to handle each onChange event handler
  handleChange = event => {
    // destructure name, password
    const { name, value } = event.target;
    this.setState({ [name] : value })
  }

  render() {
    return(
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit} >
        <FormInput handleChange={ this.handleChange } name="email" label="email" type="email" value={this.state.email} required />
        <FormInput handleChange={ this.handleChange } name="password" label="password" type="password" value={this.state.password} required />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>Google Sign In</CustomButton>
        </div>
      </form>
    </div>
    )
  }
}

export default SignIn