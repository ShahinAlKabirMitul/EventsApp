import { combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import testReducer from '../../features/testarea/testReducers'
import  eventReducer from '../../features/event/eventReducer'
import modalReducers from '../../features/modals/modalReducers'
const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducers
})
export default rootReducer;