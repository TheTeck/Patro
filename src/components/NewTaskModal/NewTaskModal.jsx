import React, { useState } from 'react';
import { Grid, Form, Button, Segment } from 'semantic-ui-react';

import ModalBase from '../ModalBase/ModalBase';

import './NewTaskModal.scss';

export default function NewTaskModal (props) {

    const [formData, setFormData] = useState({
        recipient: '',
        description: '',
        priority: 'none',
    });

    // Options for task recipient dropdown
    const options = [
        { key: 'm', text: 'Myself', value: 'myself' },
    ]
    
    // General state update
    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    // Recipient dropdown state update
    function handleRecipientChange(e, {value}) {
        setFormData({
            ...formData,
            recipient: value
        })
    }

    // Priority radio group state update
    function handlePriorityChange(e, {value}) {
        setFormData({
            ...formData,
            priority: value
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
                            <label style={{ color: 'black', fontWeight: '600' }}>Priority</label>
                            <Form.Group inline>
                                <Form.Radio
                                    label='None'
                                    value='none'
                                    checked={formData.priority === 'none'}
                                    onChange={handlePriorityChange}
                                />
                                <Form.Radio
                                    label='Low'
                                    value='low'
                                    checked={formData.priority === 'low'}
                                    onChange={handlePriorityChange}
                                />
                                <Form.Radio
                                    label='Medium'
                                    value='medium'
                                    checked={formData.priority === 'medium'}
                                    onChange={handlePriorityChange}
                                />
                                <Form.Radio
                                    label='High'
                                    value='high'
                                    checked={formData.priority === 'high'}
                                    onChange={handlePriorityChange}
                                />
                                <Form.Radio
                                    label='Urgent'
                                    value='urgent'
                                    checked={formData.priority === 'urgent'}
                                    onChange={handlePriorityChange}                                    
                                />
                            </Form.Group>
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