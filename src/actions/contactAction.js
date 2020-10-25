import {CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS, CONTACT_LIST_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAIL, CONTACT_DETAIL_FAIL, CONTACT_DETAIL_REQUEST, CONTACT_DETAIL_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS} from '../constants/contactConstants.js'
import axios from 'axios'

export const listContacts = () => async(dispatch) => {
    try {
        dispatch({type:CONTACT_LIST_REQUEST})
        const {data} = await axios.get('https://simple-contact-crud.herokuapp.com/contact')
        dispatch({
            type:CONTACT_LIST_SUCCESS,
            payload:data.data
        }) 
    } catch (error) {
        dispatch({
            type:CONTACT_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const addContact = (firstName, lastName, age, photo) => async(dispatch) => {
    try {
        dispatch({type:ADD_CONTACT_REQUEST})
        const {data} = await axios.post('https://simple-contact-crud.herokuapp.com/contact', {
            firstName: firstName,
            lastName:lastName,
            age:age,
            photo:photo
        })
        dispatch({
            type:ADD_CONTACT_SUCCESS,
            payload:data.data
        }) 
    } catch (error) {
        dispatch({
            type:ADD_CONTACT_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const listContactDetail = (id) => async(dispatch) => {
    try {
        dispatch({type:CONTACT_DETAIL_REQUEST})
        const {data} = await axios.get(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
        dispatch({
            type:CONTACT_DETAIL_SUCCESS,
            payload:data.data
        }) 
    } catch (error) {
        dispatch({
            type:CONTACT_DETAIL_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const updateContact = (firstName, lastName, age, photo, id) => async(dispatch) => {
    try {
        dispatch({type:UPDATE_CONTACT_REQUEST})
        const {data} = await axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
            firstName: firstName,
            lastName:lastName,
            age:age,
            photo:photo
        })
        dispatch({
            type:UPDATE_CONTACT_SUCCESS,
            payload:data.data
        }) 
    } catch (error) {
        dispatch({
            type:UPDATE_CONTACT_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const deleteContact = (id) => async(dispatch) => {
    try {
        dispatch({type:DELETE_CONTACT_REQUEST})
        const {data} = await axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
        dispatch({
            type:DELETE_CONTACT_SUCCESS,
            payload:data.data
        }) 
    } catch (error) {
        dispatch({
            type:DELETE_CONTACT_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}