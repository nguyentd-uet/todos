import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { removeTodo } from './../actions/actions';

class Todo extends Component {
    render() {
        const { dispatch, onClick, completed, text, id } = this.props;
        return (
            <li
                className="text-primary"
                style={{
                    borderRadius: '10px',
                    background: '#f1f1f1',
                    padding: '10px',
                    marginTop: '5px'
                }}
            >
                <FormGroup row>
                    <Col sm={{ size: 11 }}>
                        <FormGroup check>
                            <Label check
                                style={{
                                    textDecoration: completed ? 'line-through' : 'none',
                                    textAlign: 'justify'
                                }}
                            >
                                <Input 
                                    type="checkbox"
                                    defaultChecked={ completed } 
                                    onClick={ onClick }
                                    style={{
                                        width: '19px',
                                        height: '19px'
                                    }}
                                />{' '}
                                { text }
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={{ size: 1 }}>
                        <Button type="button" className="close" aria-label="Close"
                            onClick={() => dispatch(removeTodo(id))}
                        >
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Col>
                </FormGroup>
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default connect()(Todo);
