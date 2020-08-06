import React, { Component, useState } from 'react'
import { Row, Container, Col, Form, Button, Image } from 'react-bootstrap'
import { URL } from './EnvVars'
import fetch from 'isomorphic-fetch'

export default function Mars() {
    const [ camera, setCamera ] = useState('FHAZ')
    const [ sol, setSol ] = useState(0)
    const [ Images, setImages ] = useState([])
    const handleChange = event => setCamera(event.target.value)
    const handleIncDec = event => setSol(event.target.value)
    const fetchURL = `${URL}/sol/${sol}/camera/${camera}`
    const renderImages = () => {
        
        return Images.map((img, index) => <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" key={index}>
            <Image src={img} thumbnail />
        </Col>)
        
        
    }
    const handleSubmit = event => {
        event.preventDefault()
        fetch(`${fetchURL}`)
            .then(resp => resp.json())
            .then(data => {
                setImages(data.photos.map(datum => datum.img_src))
            })
    }

    const colStyle= {
        backgroundColor: 'lightblue',
        boxShadow: '3px 3px grey'
    }
    return(
        <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={12} sm={4} className="d-flex justify-content-center" style={colStyle}>
              <Form onSubmit={handleSubmit}> 
                <Form.Row className="d-flex justify-content-center align-items-center"> 
                    <h1>MARS PHOTO API</h1>
                </Form.Row> 
                <Form.Row className="d-flex justify-content-center align-items-center"> 
                    <h3>CURIOSITY</h3> 
                </Form.Row> 
                <Form.Row className="d-flex justify-content-start align-items-center">
                    <Col xs={3}>
                    <label htmlFor="sol"className="d-flex mr-5">Sol</label> 
                    </Col>
                    <Col xs={9}>
                    <input type="number" onChange={handleIncDec}></input> 
                    </Col>
                </Form.Row> 
                <Form.Row> 
                    
                        <Col xs={3}>
                <label htmlFor="camera" className="d-flex mr-3" >Camera</label> 
                </Col>
                <Col xs={9}>
                <select id="cameras" name="cameras" value={camera} onChange={handleChange}> 
                    <option value="FHAZ">FHAZ</option> 
                    <option value="RHAZ">RHAZ</option> 
                    <option value="MAST">MAST</option> 
                    <option value="CHEMCAM">CHEMCAM</option> 
                    <option value="MAHLI">MAHLI</option> 
                    <option value="MARDI">MARDI</option> 
                    <option value="NAVCAM">NAVCAM</option> 
                    <option value="PANCAM">PANCAM</option> 
                    <option value="MINITES">MINITES</option> 
                </select> 
                </Col>
                
            </Form.Row> 
            <Form.Row className="d-flex justify-content-center align-items-center"> 
                <Button type="submit" variant="primary">Find Photos</Button> 
            </Form.Row> 
        </Form> 
    </Col>
</Row>
<Row className="d-flex justify-content-center">
   {renderImages()}

</Row>
</Container>
   
)
}
