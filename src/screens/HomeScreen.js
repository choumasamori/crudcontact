import React, {useEffect, useState} from 'react'
import Contact from '../component/Contact.js'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listContacts, addContact} from '../actions/contactAction.js'
const HomeScreen = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [photo, setPhoto] = useState("")
    const dispatch = useDispatch()
    const contactList = useSelector(state => state.contactList)
    const {loading, error, contacts} = contactList
    useEffect(()=>{
        dispatch(listContacts())
    },[dispatch])
    function handleAdd(){
        if(age>100){
            alert("Age must be below or equal 100 !")
            return
        }else{
            dispatch(addContact(firstName, lastName, age, photo)).then((response)=>{
                dispatch(listContacts()).then((response)=>{
                setFirstName("")
                setLastName("")
                setAge(0)
                setPhoto("")
            }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }
        
    }
    return (
        <>
            <h1>Contact List</h1>
            {loading ? <h1>Loading....</h1> : error ? <h2>{error}</h2> : 
            <>
            <Row>
                <Col md={5}>
                <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                </Form.Group>
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
                <div className="icon" style={{paddingBottom:'1rem'}}>
                <span>
                <Button variant="primary" onClick={()=>{handleAdd()}}><i className="fas fa-user-plus"></i>Add</Button>
                </span>  
            </div>
            </Form>
                </Col>
            </Row>
            
            <Row>
            {console.log(contacts)}
            {contacts.map((contact)=>{
                return <div style={{paddingBottom:'1rem'}}><Col key={contact.id} sm={12} md={6} lg={4} xl={4}>
                        <Contact contact={contact}/>
                     </Col></div>
                })}
            </Row>
            </>
            }
            
            
            
        </>
    )
}

export default HomeScreen
