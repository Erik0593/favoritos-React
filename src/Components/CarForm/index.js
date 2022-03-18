const CarForm = props => {
    const {handlers, title, editedCarData, carData} = props
    return(
        <form action="" className='border rounded shadow p-3'>
          <h2>{title}</h2>
          <div className="form-group"><label htmlFor="">Imagen</label>
            <input type="text" name="picture" className="form-control"  onChange={editedCarData ? handlers.editCarFormHandler : handlers.carFormHandler} value={editedCarData ? editedCarData.picture : carData.picture}/>
            </div>
            <div className="form-group"><label htmlFor="">Modelo</label>
            <input type="text" name="modelo" className="form-control"  onChange={editedCarData ? handlers.editCarFormHandler : handlers.carFormHandler} value={editedCarData ? editedCarData.modelo : carData.modelo}/>
            </div>
            <div className="form-group"><label htmlFor="">Marca</label>
            <input type="text" name="marca" className="form-control"  onChange={editedCarData ? handlers.editCarFormHandler : handlers.carFormHandler} value={editedCarData ? editedCarData.marca : carData.marca}/>
            </div>
            <div className="form-group"><label htmlFor="">Año</label>
            <select class="form-select" aria-label="Selecciona un año" name="año" onChange={editedCarData ? handlers.editCarFormHandler : handlers.carFormHandler} value={editedCarData ? editedCarData.año : carData.año}>
              <option>Año</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
            </div>
            <button type="button" className="btn btn-dark mt-3" onClick={async() => {handlers.saveHandler()}}>Guardar Coche</button>
          </form>
    )
}

export default CarForm