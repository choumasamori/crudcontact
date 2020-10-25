import {CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS, CONTACT_DETAIL_FAIL, CONTACT_DETAIL_SUCCESS, CONTACT_DETAIL_REQUEST} from '../constants/contactConstants.js'

export const contactsReducer = (state = {contacts:[]}, action) => {
    switch(action.type){
        case CONTACT_LIST_REQUEST:
            return {loading:true, contacts:[]}
        case CONTACT_LIST_SUCCESS:
            return {loading:false, contacts:action.payload}
        case CONTACT_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
export const contactDetailReducer = (state = {contact:[]}, action) => {
    switch(action.type){
        case CONTACT_DETAIL_REQUEST:
            return {loading:true, contact:[]}
        case CONTACT_DETAIL_SUCCESS:
            return {loading:false, contact:action.payload}
        case CONTACT_DETAIL_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}