import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginAndRegister from "./pages/signin-and-register/signin-and-register.component";
import { auth } from './firebase/firebase.utils'
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

const TopicsList = () => {
  return (
    <div>
      <h1>Topics List Page</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page</h1>
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user)
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
