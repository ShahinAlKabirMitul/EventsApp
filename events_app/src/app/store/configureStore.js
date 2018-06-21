import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers/rootReducer'
export const confiqureStore=(preloadedState) =>{
    const middlewares=[];
    const middlewaresEnhancer=applyMiddleware(... applyMiddleware);
    const storeEnhancers =  [middlewaresEnhancer];
    const composeEnhancer = compose(...storeEnhancers)
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancer
    )
    return store;
}