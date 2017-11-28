import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { setFilter, Filters } from './../actions/actions';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } = Filters

class Filter extends Component {
    render() {
        const { dispatch, filter } = this.props;
        return (
            <ButtonGroup>
                <Button color="primary" onClick={() => dispatch(setFilter(SHOW_ALL))} active={filter===SHOW_ALL}>Show all</Button>
                <Button color="primary" onClick={() => dispatch(setFilter(SHOW_COMPLETED))} active={filter===SHOW_COMPLETED}>Completed</Button>
                <Button color="primary" onClick={() => dispatch(setFilter(SHOW_UNCOMPLETED))} active={filter===SHOW_UNCOMPLETED}>Uncompleted</Button>
            </ButtonGroup>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}
export default connect(mapStateToProps)(Filter);
