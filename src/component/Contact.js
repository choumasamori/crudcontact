import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Card, Button, Modal} from 'react-bootstrap'
const Contact = ({contact}) => {      
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Link to={`/contact/${contact.id}`}><Card.Img variant="top" src={contact.photo.substring('0,3').length!==3? `${contact.photo}` : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'} style={{width:'17.9rem', height:'17.9rem'}} />
       </Link>
         <Card.Body>
            <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
            <Card.Text>Age : {contact.age}</Card.Text>
        </Card.Body>
        </Card>
        </>
        
    )
}

export default Contact
