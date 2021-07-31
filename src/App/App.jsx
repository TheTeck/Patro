import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import ArchivesPage from '../pages/ArchivesPage/ArchivesPage';
import ConnectionsPage from '../pages/ConnectionsPage/ConnectionsPage';
import userService from '../utils/userService'


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  const menuOptions = [
    "Home",
    "Archives",
    "Connections"
  ]

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function logoutHandler(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/archives">
                    <ArchivesPage user={user} menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/connections">
                    <ConnectionsPage user={user} menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/home">
                    <HomePage user={user} menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/">
                    <HomePage user={user} menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
