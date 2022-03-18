import { useState, useEffect } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './App.scss';
import CarCard from './Components/CarCard';

import Catalog from './Components/Pages/Catalog';
import Create from './Components/Pages/Create';
import CarDetail from './Components/Pages/CarDetail';
import api from './lib/api'


function App() {

  //coleccion completa de coches
  
  //nuevo coche a guardar
  const [carData, setCarData] = useState({})
  //coche que estamos editando
  const [isEditing, setIsEditing] = useState(false)
  //bandera si esta loggeado el usuario
  const [isLogged, setIsLogged] = useState(false)
  //bandera si estamos editando un coche
  const [editedCar, setEditedCar] = useState ({})
  
  
/*
  //aqui estamos creando el handler del objeto neuvo que vamos a crear 
  //estamos seteando a setCarData que vale, todo lo que tenga carData y la nueva porpiedad y valor de cada input
  const carFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setCarData({...carData, [property]:value})
  }

  const editCarFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setEditedCar({...editedCar, [property]:value})
  }

  //aqui estamos guardando el objeto dentro de la base de datos, y actualizando en tiempo real el nuevo objeto dento de la pantalla
  const saveCar =  async () => {
    let saveCarResponse = await api.saveCar(carData)
    let data = await api.getAllCars()
    setCoches(data)

  }

  const editCar = event => {
    console.log('Editar Coche')
    let carId = event.target.dataset.carId
    setEditedCar({...coches[carId], carId})
    setIsEditing(true)
    console.log(carId)
  }

  const saveEditedCar = async () => {
    let response = await api.saveEditedCar( editedCar.carId , editedCar)
    console.log(response)

  }

  const logIn = () => {
    alert('Sesión iniciada con éxito')
    setIsLogged(!isLogged)
  }

  const logOut = () => {
    alert('Cerrando sesión')
    setIsLogged(!isLogged)
  }
*/
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className='nav-link' >
          Catalogo
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/create'  className='nav-link'>
          Crear coche
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Routes>
      <Route path='/' element={<Catalog />} />
      <Route path='create' element={<Create />} />
      <Route path='car-detail/:id' element={<CarDetail />} />
    </Routes>


{/*       
      <button classNameName="btn btn-primary" onClick={isLogged ? logOut : logIn}>{isLogged ? 'Log Out' : 'Log In'}</button>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row py-3">
              {Object.keys(coches).map(coche => {
                const { año, modelo, marca, picture } = coches[coche]
                return (
                  <CarCard 
                  key={coche}
                  carData={{...coches[coche], carId:coche}} 
                  editHandler={editCar}/>
                )
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            {
              !isEditing && isLogged && (
                <CarForm handlers={{
                  saveHandler: saveCar, carFormHandler
                }} title="Guardar nuevo Coche"
                carData={carData}/>
              )
            }
            {
              isEditing && (
                <CarForm handlers={{
                  saveHandler: saveEditedCar, editCarFormHandler
                }} title="Editar Coche" 
                editedCarData ={editedCar}/>
              )
            }
          </div>
          </div>
      </div> */}


    </div>
  );
}

export default App;
