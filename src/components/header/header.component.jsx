import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'  // import higher order function connect function from Redux
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = ({currentUser}) => (
  <div className="header">
    <div className="logo-container">
    <Link to="/">
      <Logo className="logo"/>
    </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/signin">MENS</Link>
      <Link className="option" to="/shop">SHOP</Link>
      {
        currentUser ? 
        <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div>
        : <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </div>
)

const mapStateToProps = (state) => (
  {currentUser: state.user.currentUser}
)
// connect is used to access state from our root reducer
export default connect(mapStateToProps)(Header);