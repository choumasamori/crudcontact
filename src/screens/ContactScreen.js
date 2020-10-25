import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form, FormGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listContactDetail, updateContact, deleteContact} from '../actions/contactAction.js'
const ContactScreen = ({match}) => {
    //const [contact, setContact ] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [photo, setPhoto] = useState("")
    const dispatch = useDispatch()
    const contactDetail = useSelector(state => state.contactDetail)
    const {loading, error, contact} = contactDetail
    useEffect(()=>{
      dispatch(listContactDetail(match.params.id))
    },[match, dispatch])
    function handleUpdate(){
        if(age>100){
            alert("Age must be below or equal 100 !")
            return
        }else{
            dispatch(updateContact(firstName, lastName, age, photo, match.params.id)).then((response)=>{
                dispatch(listContactDetail(match.params.id)).then((response)=>{
                    setFirstName("")
                    setLastName("")
                    setAge(0)
                    setPhoto("")
                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }
        
    }
    function handleDelete(){
        dispatch(deleteContact(match.params.id)).then((response)=>{
            setFirstName("")
            setLastName("")
            setAge(0)
            setPhoto("")
            window.location.replace("/");
        }).catch(err=>console.log(err))
        
    }
    return (
        <>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={contact.photo ? contact.photo : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'} style={{width:'17.9rem', height:'17.9rem'}} />
      
                    <Card.Body>
                        <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
                        <Card.Text>Age : {contact.age}</Card.Text>
                    </Card.Body>
                    </Card>
            </Col>
            <Col>
            <Form>
                <FormGroup controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                </FormGroup>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                </Form.Group>
                <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    Maximum 100 years old
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formAge">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control placeholder="Photo" value={photo} onChange={(e)=>{setPhoto(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    Enter image link or leave blank
                    </Form.Text>
                </Form.Group>
                <div className="icon">
                <span>
                <Button variant="primary" onClick={()=>{handleUpdate()}}><i className="fas fa-user-edit"></i>Update</Button>
                </span>
                <span>
                    <Button variant="primary" onClick={()=>{handleDelete()}}><i className="fas fa-trash"></i>Delete</Button>
                
                </span>
            </div>
            </Form>
            </Col>
        </Row>
                
                
        </>
    )
}

export default ContactScreen
