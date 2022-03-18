import { useState, useEffect } from 'react';
import './App.scss';
// import api from '../src/lib/api'
import {
  Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, Form, FormGroup, Input, Label,
  FormText, Container, Col, Row
} from 'reactstrap'

function App() {
  const BASE_URL = 'https://crud-vacantes-default-rtdb.firebaseio.com'
  const [listJob, setListJob] = useState({})
  const [listApplied, setListApplied] = useState({})
  const [jobData, setJobData] = useState({})



  useEffect(() => {
    fetch(`${BASE_URL}/vacante.json`).then(response => {
      return response.json()
    })
      .then((data) => {
        setListJob(data)
      })
  }, [])

  const buttonApply = event => {
    setListApplied = [{ ...listApplied }, event.target.value]
  }

  const formHandler = event => {
    let property = event.target.name
    let value = event.target.value
    setJobData({ ...jobData, [property]: value })
    console.log(jobData)
  }

  const buttonCreate = async () => {
    setListJob({ ...listJob }, jobData)
    let response = await fetch(`${BASE_URL}/vacante.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    let response2 = await response.json()
    console.log(response2)
    if (response2.name) {
      fetch(`${BASE_URL}/vacante.json`).then(response => {
        return response.json()
      })
        .then((data) => {
          setListJob(data)
        })
    }
    return response2
  }

  const buttonDelete = async (event) => {
    let jobId = event.target.dataset - jobId
    let response = await fetch(`${BASE_URL}/vacante/${jobId}.json`, {
      method: 'DELETE'
    })
  }




  return (
    <div className="App">

      <div>
        <Container>
          <Row>
            <Col md="6 mt-3" >
            <div >
              {
                Object.keys(listJob).map(job => {
                  const { img, vacante, tipo, tags } = listJob[job]
                  return (
                    <Card key={job}
                      jobData={{ ...listJob[job], jobId:job }}
                      className="card text-white bg-dark mb-3"
                    >
                      <CardBody>
                        <CardImg
                          alt="Card image cap"
                          src={img}
                        />
                        <CardTitle tag="h5">
                          {vacante}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          {tipo}
                        </CardSubtitle>
                        <CardText>
                          {tags}
                        </CardText>
                        <Button className='btn btn-success' onClick={buttonApply}>
                          Aplicar
                        </Button>
                        <Button className='btn btn-danger' onClick={buttonDelete}>
                          Eliminar
                        </Button>

                      </CardBody>
                    </Card>
                  )
                })
              }
            </div>
            </Col>
            <Col md="6 mt-3">
            <Form className='form-control card text-white bg-dark mb-3'>
              <FormGroup>
                <Label for="exampleText"> Nombre de la Vacante</Label>
                <Input
                  id="exampleText"
                  name="vacante"
                  type="text"
                  onChange={formHandler}
                />
              </FormGroup>


              <FormGroup>
                <Label for="exampleSelect">
                  Select
                </Label>
                <Input
                  id="exampleSelect"
                  name="tipo"
                  type="select"
                  onChange={formHandler}
                >
                  <option>
                    Full-time
                  </option>
                  <option>
                    Part-time
                  </option>
                  <option>
                    Remote
                  </option>
                </Input>
              </FormGroup>


              <FormGroup>
                <Label for="exampleFile">
                  Imagen Empresa
                </Label>
                <Input
                  id="exampleFile"
                  name="img"
                  type="text"
                  onChange={formHandler}
                />
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend>
                  Skills
                </legend>
                <FormGroup check>
                  <Input
                    name="javaScript"
                    type="checkbox"
                    onChange={formHandler}
                  />
                  {' '}
                  <Label check>
                    JavaScript
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="CSS"
                    type="checkbox"
                    onChange={formHandler}
                  />
                  {' '}
                  <Label check>
                    CSS
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  disabled
                >
                  <Input
                    name="React"
                    type="checkbox"
                    onChange={formHandler}
                  />
                  {' '}
                  <Label check>
                    React
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button onClick={buttonCreate}>
                Crear Vacante
              </Button>
            </Form>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
}

export default App;
