import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginAndRegister from "./pages/signin-and-register/signin-and-register.component";
import { auth, createUserProfileDocument, readData } from './firebase/firebase.utils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./App.css";
import ShopPage from "./pages/shop/shop.component";

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
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
   readData().then(console.log)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth)
        // get data from snapshot
        console.log('ref snap', (await userRef).data())
        const userSnapshotData = (await userRef).data()
       // set State to the current user
        this.setState({ currentUser: {
          // id: userSnapshotData.id,
          ...userSnapshotData
          }
        }, () => {console.log(this.state)})
        
        // this.setState({ currentUser: user})
        
      } else {
        this.setState({ currentUser: userAuth })
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
        <Header currentUser={this.state.currentUser}/>
        {/* <HomePage /> */}
        <Switch>
          <Route path="/signin">
            <LoginAndRegister />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/shop/hats">
            <HatsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  }
}

export default App;
