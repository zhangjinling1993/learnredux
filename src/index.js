import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import counter from './reducer/counter';
import { increment, decrement } from './actions/index'
import { Provider } from 'react-redux'

const store = createStore(counter);

// store.subscribe(() => console.log("State updated", store.getState()));

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <App onIncrement = {() => store.dispatch(increment())} 
                 onDecrement = {() => store.dispatch(decrement())}/>
        </Provider>,
        document.getElementById('root'));
}

render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
