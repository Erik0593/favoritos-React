import { useState, useEffect } from 'react';
import './App.scss';
import CarCard from './Components/CarCard';
import api from './lib/api'

function App() {

  const [coches, setCoches] = useState({})
  const [reFetch, setReFetch] = useState(false)
  const [carData, setCarData] = useState({})
  useEffect( async () => {
    let data = await api.getAllCars()
    console.log(data)
    setCoches(data)
    // api.getAllCars()
    /*console.log('Componente renderizado')
    let data = fetch('https://react-crud-erik-15g-default-rtdb.firebaseio.com/coches.json').then(response => {
      response.json().then(json => {
        setCoches(json)
      })
    })*/
  }, [])

  const carFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setCarData({...carData, [property]:value})
  }

  const saveCar = () => {
    console.log(carData)
    fetch('https://react-crud-erik-15g-default-rtdb.firebaseio.com/coches.json',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(carData)
    }).then(response => {
      response.json().then(json => {
        console.log(json)
        let data = fetch('https://react-crud-erik-15g-default-rtdb.firebaseio.com/coches.json').then(response => {
      response.json().then(json => {
        setCoches(json)
      })
    })
      })
    })

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
                  <CarCard carData={coches[coche]} />
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form action="" className='border rounded shadow p-3'>
          <div className="form-group"><label htmlFor="">Imagen</label>
            <input type="text" name="picture" className="form-control"  onChange={carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Modelo</label>
            <input type="text" name="modelo" className="form-control"  onChange={carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Marca</label>
            <input type="text" name="marca" className="form-control"  onChange={carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Año</label>
            <select class="form-select" aria-label="Selecciona un año" name="año" onChange={carFormHandler}>
              <option>Año</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
            </div>
            <button type="button" className="btn btn-dark mt-3" onClick={saveCar}>Guardar Coche</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
