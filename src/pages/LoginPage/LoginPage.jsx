import React, { useState, useEffect } from 'react';
import './LoginPage.scss';

import Header from '../../components/Header/Header';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function LoginPage(props){
    
    const [invalidForm, setInvalidForm] = useState(true);
    const [error, setError ]          = useState('')
    const [state, setState]       = useState({
        email: '',
        password: '',
    });

    const history = useHistory();
    
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    };
   
    function handleSignupLinkClick () {
      history.push('/signup');
    };
    

    async function handleSubmit(e){
      e.preventDefault();
              
      try {
          await userService.login(state);
          // Route to wherever you want!
          props.handleSignUpOrLogin();
          history.push('/')
          
        } catch (err) {
          // Invalid user data (probably duplicate email)
          setError(err.message);
        }
    };

    useEffect(() => {
      if (state.username !== '' && state.password !== '' && invalidForm)
        setInvalidForm(false)
      else if ((state.username === '' || state.password === '') && !invalidForm)
        setInvalidForm(true)
    });

    return (
        <div className="login-page-container">
          <Header menuOptions={null} />
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
              <div className="login-header">Login to Patro</div>
              <Form  autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    value={ state.username}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={ state.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    color='youtube'
                    fluid size='large'
                    type="submit"
                    className="btn"
                    disabled={invalidForm}
                  >
                    Login
                  </Button>
                </Segment>
              </Form>

              {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>
          <div className="signup-link-sentence">Not already a member? <span onClick={handleSignupLinkClick} className="signup-link">Sign up here</span></div>
        </div>
      );
}

