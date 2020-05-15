import reducer from '../Reducers'; 

import {applayMiddleware, createStore, compose} from 'redux'; 

const store = createStore(
    reducer, 
    {}
)

export default store; 