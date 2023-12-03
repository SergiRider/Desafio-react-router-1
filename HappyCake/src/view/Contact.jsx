import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";


const Contacts = () => {
  return (
    

    <>
    <div className='formulario'>
      <div className='encabezado'>
      <h1>Cuentanos, ¿En qué podemos ayudar?</h1>
      </div>
      <Container>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={5} type="text" placeholder="Escribe aquí tu consulta..." />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    </>
  )
}

export default Contacts