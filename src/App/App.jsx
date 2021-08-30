import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import ArchivesPage from '../pages/ArchivesPage/ArchivesPage';
import ConnectionsPage from '../pages/ConnectionsPage/ConnectionsPage';
import userService from '../utils/userService'
import { UserContext } from '../UserContext';


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  UserContext.displayName = "User Context";

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
    setUser(null);
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
          { user ? 
            <UserContext.Provider value={user}> 
             <Switch>
                <Route exact path="/archives">
                    <ArchivesPage menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/connections">
                    <ConnectionsPage user={user} menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/home">
                    <HomePage menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
                <Route exact path="/">
                    <HomePage menuOptions={menuOptions} logoutHandler={logoutHandler} />
                </Route>
            </Switch>
            </UserContext.Provider>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
