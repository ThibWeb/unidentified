import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import counter from '../actions/counter';

const App = React.createClass({
    displayName: 'App',

    propTypes: {
        children: React.PropTypes.any.isRequired,
        value: React.PropTypes.number.isRequired,
        onIncreaseClick: React.PropTypes.func.isRequired,
    },

    render() {
        const childrenProps = {
            value: this.props.value,
            onIncreaseClick: this.props.onIncreaseClick,
        };

        return (
            <div>
                {this.props.value}
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Link to="/hello">Hello</Link>
                {React.cloneElement(this.props.children, childrenProps)}
            </div>
        );
    },
});

function mapStateToProps(state)  {
    return {
        value: state.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(counter),
    };
}

// Connected Component:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
