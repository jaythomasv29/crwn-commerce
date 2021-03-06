import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndRegister from "./pages/signin-and-register/signin-and-register.component";
import { auth, createUserProfileDocument, readData } from './firebase/firebase.utils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import "./App.css";

const HatsPage = () => {
  let { id } = useParams();
  
  console.log(id);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>I'm the hats page</h1>
    </div>
  );
};
class App extends Component {
  
  unsubscribeFromAuth = null
  
  componentDidMount() {
  //  readData().then(console.log)
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth)
        // get data from snapshot
        console.log('ref snap', (await userRef).data())
        const userSnapshotData = (await userRef).data()
       // set State to the current user
        setCurrentUser({ currentUser: {
          // id: userSnapshotData.id,
          ...userSnapshotData
          }
        })
        
      } else {
        setCurrentUser(userAuth)
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="app-container">
      <Router>
        <Header />
        {/* <HomePage /> */}
        <Switch>
          <Route exact path="/"> 
            <HomePage />
          </Route>
            
          <Route exact path="/signin">
            
           { this.props.currentUser ? <Redirect to="/" /> : <SigninAndRegister /> } 
          </Route>
          
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/shop/hats">
            <HatsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  }
}

const mapStateToProps = ({ user }) => ({
  // get currentUser from store 
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
