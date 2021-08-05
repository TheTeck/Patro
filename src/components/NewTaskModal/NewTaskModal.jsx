import React, { useState } from 'react';
import { Grid, Form, Button, Segment } from 'semantic-ui-react';

import ModalBase from '../ModalBase/ModalBase';

import './NewTaskModal.scss';

export default function NewTaskModal (props) {

    const [formData, setFormData] = useState({
        recipient: '',
        description: '',
    });

    const options = [
        { key: 'm', text: 'Myself', value: 'myself' },
    ]
    
    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    function handleRecipientChange(e, {value}) {
        setFormData({
            ...formData,
            recipient: value
        })
    }

    function handleSubmit() {
        console.log(formData)
    };

    return (
        <ModalBase
            open={props.open} 
            closeModals={props.closeModals}
            title="New Task"
        >
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column textAlign="left" style={{ maxWidth: 500 }}>
                    <Form  autoComplete="off"  onSubmit={handleSubmit}>
                        <Segment stacked>
                            {/* <Form.Input
                                label="Email"
                                name="email"
                                placeholder="Enter Email"
                                value={ state.username}
                                onChange={handleChange}
                                required
                            /> */}
                            <Form.Select 
                                fluid
                                name='recipient'
                                placeholder='Myself'
                                label='Task For'
                                options={options}
                                placeholder='Myself'
                                onChange={handleRecipientChange}
                                required
                            />
                            <Form.TextArea 
                                fluid
                                name='description'
                                placeholder='Describe the task'
                                label='Description'
                                onChange={handleChange}
                                required
                            />
                            <Button
                                style={{ backgroundColor: 'rgb(251, 133, 0' }}
                                fluid size='large'
                                type="submit"
                            >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </ModalBase>
    );
};