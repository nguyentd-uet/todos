import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addTodo } from './../actions/actions';

class AddTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({todoText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.todoText.trim() === '') {
            return
        }
        this.props.dispatch(addTodo(this.state.todoText))
        this.setState({todoText: ''})
    }
    render() {
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="todoText" hidden>Todo</Label>
                        <Input type="text" name="input" id="todoText" placeholder="Enter text ..."
                            value={this.state.todoText} onChange={this.handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <Button type="submit" outline color="primary">
                        Add
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect()(AddTodoForm);
