import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../signup/signup.component';

import './signin-and-register.styles.scss';

const SigninAndRegister = () => {
  return(
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
  )
}

export default SigninAndRegister;