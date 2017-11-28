import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toogleTodo, Filters } from './../actions/actions';

class TodoList extends Component {
    render() {
        const { dispatch, todos } = this.props;
        return (
            <ul
                style={{
                    listStyleType: 'none'
                }}
            >
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => dispatch(toogleTodo(todo.id))}
                    />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

const { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } = Filters

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_UNCOMPLETED:
        return todos.filter(t => !t.completed)
      case SHOW_ALL:
      default:
        return todos
    }
}

const mapStateToProps = state => ({
    filter: state.filter,
    todos: getVisibleTodos(state.todos, state.filter)
});

export default connect(mapStateToProps)(TodoList);
