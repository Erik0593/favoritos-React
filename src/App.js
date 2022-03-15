import { useState } from 'react';
import './App.scss';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'

function App() {
  //Declaracion de Estados
  //estado de la lista de tareas
  const [toDoList, setToDoList] = useState([])
  //estado de la lista de favoritos
  const [listFavoritos, setListFavoritos] = useState([])
  //estado de la información donde la vamos a guardar
  const [listData, setListData] = useState({})


  //declaracion de Handlers
  //aqui obtenemos los datos para guardarlos en un objeto
  const getData = event => {
    let property = event.target.name
    let value = event.target.value
    setListData({...listData, [property]: value})
  }

  //aqui guardamos y actualizamos la lista de objetos
  const saveData = () => {
    setToDoList([...toDoList,listData])
  }

  //aqui guardamos dependiendo el index lo que quieremos guardar en favoritos
  const favoritos = event => {
    let indexFav = event.target.dataset.listIndex
    let favoritos = listFavoritos
    setListFavoritos([...favoritos, listData])
  }

  //borramos el objeto por medio del indice y actualizamos para que se renderice de nuevo
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


  //creando el componente
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

            <form action="" className="mt-3 p-3 bg-dark text-white border rounded">
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
