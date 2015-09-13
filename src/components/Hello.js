import React from 'react';

export default React.createClass({
    displayName: 'Hello',

    propTypes: {
        value: React.PropTypes.number.isRequired,
        onIncreaseClick: React.PropTypes.func.isRequired,
    },

    render() {
        const { value, onIncreaseClick } = this.props;

        return (
            <div>
                Hello! {value}
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    },
});
