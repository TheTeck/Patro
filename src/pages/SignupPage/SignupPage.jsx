import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Header from '../../components/Header/Header';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import './SignupPage.scss';

export default function SignUpPage(props){

    const [invalidForm, setInvalidForm] = useState(true);
    const [error, setError ] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState]  = useState({
      username: '',
      fullname: '',
      email: '',
      password: '',
      passwordConf: '',
    });
  
    const history = useHistory()
  
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  
    async function handleSubmit(e){
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('photo', selectedFile);
  
      for (let key in state){
        formData.append(key, state[key])
      }

      try {
        await userService.signup(formData);
        props.handleSignUpOrLogin();
        history.push('/');
  
      } catch(err){
        console.log(err.message)
        setError(err.message)
      }
  
    }
  
    function handleFileInput(e){
      setSelectedFile(e.target.files[0])
    }

    useEffect(() => {
      if (selectedFile !== '' && state.username !== '' && state.fullname !== '' && state.email !== '' 
          && state.password !== '' && state.passwordConf !== '' && invalidForm)
        setInvalidForm(false)
      else if ((selectedFile === '' || state.username === '' || state.fullname === '' || state.email === ''
          || state.password === '' || state.passwordConf === '') && !invalidForm)
        setInvalidForm(true)
    })   
      
    return (
      <div className="signup-page-container">
        <Header menuOptions={null} />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
            <div className="signup-header">Sign Up with Patro</div>          
              <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} stacked>               
                  <Form.Input
                    label="Username"                    
                    name="username"
                    placeholder="Enter Your Username"
                    value={state.username}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
                    label="Full Name"                    
                    name="fullname"
                    placeholder="Enter Your Full Name"
                    value={state.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
                    label="Email"
                    type="email"                  
                    name="email"
                    placeholder="Enter Your Email"
                    value={ state.email}
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
                  <Form.Input     
                    name="passwordConf"
                    type="password"
                    placeholder="Re-Enter Password"
                    value={ state.passwordConf}
                    onChange={handleChange}
                    required
                  />
                  <Form.Field> 
                    <Form.Input
                      label="Avatar Image"
                      type="file"
                      name="photo"
                      placeholder="upload image"
                      onChange={handleFileInput}
                      />      
                  </Form.Field>
                  <Button
                    color="youtube"
                    type="submit"
                    className="btn"
                    fluid size="large"
                    disabled={invalidForm}
                  >
                    Sign Up
                  </Button>
                </Segment>
                {error ? <ErrorMessage error={error} /> : null}
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );   
      
  }
