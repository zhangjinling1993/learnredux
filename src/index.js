import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import counter from './reducer/counter'

const store = createStore(counter);

// store.subscribe(() => console.log("State updated", store.getState()));

const render = () => {
    ReactDOM.render(
        <App 
            onIncrement = {() => store.dispatch({ type: "Increment" })} 
            onDecrement = {() => store.dispatch({ type: "Decrement" })}
            value={store.getState()}
        />, document.getElementById('root'));
}

render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
