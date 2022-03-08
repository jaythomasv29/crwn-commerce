import React from 'react';
import CustomButton from '../components/custom-bottom/custom-button.component';
import FormInput from '../components/form-input/form-input.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './signup.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    try {
      const { user } = await createUserWithEmailAndPassword(auth,
        email, password
      )

      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    console.log(name)
    this.setState({[name]: value}, () => {console.log(this.state)})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            value={displayName}
            required
          />

          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            label="Email"
            value={email}
            required
          />

          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            label="password"
            value={password}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            value={confirmPassword}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
} export default SignUp