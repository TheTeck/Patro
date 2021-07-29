import React, { useState, useEffect } from 'react';
import './LoginPage.scss';

import MainHeader from '../../components/Header/Header';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default function LoginPage(props){
    
    const [invalidForm, setInvalidForm] = useState(true);
    const [error, setError ]          = useState('')
    const [state, setState]       = useState({
        email: '',
        password: '',
    })

    const history = useHistory();
    
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
   
    

    async function handleSubmit(e){
      e.preventDefault()
              
      try {
          await userService.login(state);
          // Route to wherever you want!
          props.handleSignUpOrLogin()
          history.push('/')
          
        } catch (err) {
          // Invalid user data (probably duplicate email)
          setError(err.message)
        }
    }

    useEffect(() => {
      if (state.username !== '' && state.password !== '' && invalidForm)
        setInvalidForm(false)
      else if ((state.username === '' || state.password === '') && !invalidForm)
      setInvalidForm(true)
    })

    return (
        <>
          <MainHeader user={null} />
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
            Log-in to Patro
            </Header>
            <Form  autoComplete="off"  onSubmit={handleSubmit}>
               <Segment stacked>
                  <Form.Input
                    name="email"
                    placeholder="Enter Email"
                    value={ state.username}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
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
        </>
      );
}

