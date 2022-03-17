import { useState, useEffect } from 'react';
import './App.scss';
import CarCard from './Components/CarCard';
import CarForm from './Components/CarForm'
import api from './lib/api'

function App() {

  const [coches, setCoches] = useState({})
  const [carData, setCarData] = useState({})
  
  useEffect( async () => {
    let data = await api.getAllCars()
    console.log(data)
    setCoches(data)
  }, [])  

  //aqui estamos creando el handler del objeto neuvo que vamos a crear 
  //estamos seteando a setCarData que vale, todo lo que tenga carData y la nueva porpiedad y valor de cada input
  const carFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setCarData({...carData, [property]:value})
  }

  //aqui estamos guardando el objeto dentro de la base de datos, y actualizando en tiempo real el nuevo objeto dento de la pantalla
  const saveCar =  async () => {
    let saveCarResponse = await api.saveCar(carData)
    let data = await api.getAllCars()
    setCoches(data)

  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row py-3">
              {Object.keys(coches).map(coche => {
                const { año, modelo, marca, picture } = coches[coche]
                return (
                  <CarCard 
                  key={coche}
                  carData={coches[coche]} />
                )
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <CarForm handlers={{
              saveCar, carFormHandler
            }}/>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
