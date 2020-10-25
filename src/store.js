import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {contactsReducer, contactDetailReducer} from './reducers/contactsReducer.js'

const reducer = combineReducers({
    contactList:contactsReducer,
    contactDetail: contactDetailReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store