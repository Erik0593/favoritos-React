import { useState, useEffect } from 'react';
import './App.scss';
// import api from '../src/lib/api'
// import {
//   Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, Form, FormGroup, Input, Label,
//   FormText, Container, Col, Row
// } from 'reactstrap'

function App() {
  const BASE_URL = 'https://crud-vacantes-default-rtdb.firebaseio.com'
  
  const [listJob , setListJob] = useState({})


  useEffect(() => {
    fetch(`${BASE_URL}/vacante.json`).then(response => {
      return response.json()
    })
      .then((data) => {
        setListJob(data)
      })
  }, [])


  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              {Object.keys(listJob).map( job => {
                  return (
                    <Card 
                    titulo={titulo}
                    imagen={img}
                    tipo={tipo}
                    tag={tags}
                    />
                  )
              })
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
