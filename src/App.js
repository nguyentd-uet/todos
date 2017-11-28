import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import { Container, Col, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>  
            <Col sm={{ size: 6 }}>
              <AddTodoForm />
              <br/>
              <Filter />
            </Col>
            <Col sm={{ size: 6 }}>
              <TodoList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
