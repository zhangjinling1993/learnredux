import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div style={{ textAlign: "center", width: 200, padding: 20, border: "1px solid #007bff"}}>
                <p>{ value }</p>
                <button onClick={onIncrement} className="btn btn-primary btn-sm"> + </button>
                &nbsp;
                <button onClick={onDecrement} className="btn btn-danger btn-sm"> - </button>
            </div>
        )
    }
}

export default Counter;