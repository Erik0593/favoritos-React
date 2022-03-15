import { useState } from 'react';
import './App.scss';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'

function App() {
  //Declaracion de Estados
  const [toDoList, setToDoList] = useState([])
  const [listFavoritos, setListFavoritos] = useState([])
  const [listData, setListData] = useState({})


  //declaracion de Handlers
  const getData = event => {
    let property = event.target.name
    let value = event.target.value
    setListData({...listData, [property]: value})
  }

  const saveData = () => {
    setToDoList([...toDoList,listData])
  }
  
  const favoritos = event => {
    let indexFav = event.target.dataset.listIndex
    setListFavoritos([...listFavoritos, toDoList[indexFav]])
  }

  const deleteToDo = event => {
    let listIndex = event.target.dataset.listIndex
    let allList = toDoList
    allList.splice(listIndex,1)
    console.log(allList)
    setToDoList([...allList])
  }
  const deleteFav = event => {
    let listIndex = event.target.dataset.listIndex
    let allFav = listFavoritos
    allFav.splice(listIndex,1)
    console.log(allFav)
    setListFavoritos([...allFav])
  }


  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12" md="4">
          <h1>To Do List</h1>
            {
              toDoList.map((item, index) => {
                const {title, text} = item
            return(
              <Card
              key={index}
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
              className="mt-3"
            >

              <CardTitle tag="h5">{title}</CardTitle>
              <CardText>{text}</CardText>
              <Button data-list-index={index} onClick={deleteToDo}>Delete</Button>
              <Button className='mt-3' data-list-index={index} onClick={favoritos}>Favoritos</Button>
              </Card>
              )
              })
            }
          </Col>
          <Col xs="12" md="4">
          <h1>Favoritos</h1>
            {
              listFavoritos.map((item, index) => {
                const {title, text} = item
            return(
              <Card
              key={index}
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
              className="mt-3"
            >

              <CardTitle tag="h5">{title}</CardTitle>
              <CardText>{text}</CardText>
              <Button data-list-index={index} onClick={deleteFav}>Delete</Button>
              </Card>
              )
              })
            }
          </Col>
          <Col xs="12" md="4">

            <form action="" className="mt-5 p-3 bg-dark text-white border rounded">
              <div className="form-group mb-3">
                <label htmlFor="title">Titulo</label>
                <input className='form-control' type="text" name="title" onChange={getData}/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="text">Texto</label>
                <input className='form-control' type="text" name="text" onChange={getData}/>
              </div>
              <div className="btn btn-success" onClick={saveData}>Guardar Tarea</div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
