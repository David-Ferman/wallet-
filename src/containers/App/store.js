import { combineReducers, createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {usersReducer,registrationReducer, authenticationReducer, themeReducer } from '../../redux/reducers/index';





const reducer = combineReducers({
    theme: themeReducer,
    auth: authenticationReducer,
    registration: registrationReducer,
    users: usersReducer
});



    const store = createStore(
        reducer, 
        compose( applyMiddleware(thunk), 
    
            typeof window === 'object' &&
                typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
    


export default store;
