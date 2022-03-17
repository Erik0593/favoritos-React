const CarForm = props => {
    const {handlers} = props
    return(
        <form action="" className='border rounded shadow p-3'>
          <div className="form-group"><label htmlFor="">Imagen</label>
            <input type="text" name="picture" className="form-control"  onChange={handlers.carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Modelo</label>
            <input type="text" name="modelo" className="form-control"  onChange={handlers.carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Marca</label>
            <input type="text" name="marca" className="form-control"  onChange={handlers.carFormHandler}/>
            </div>
            <div className="form-group"><label htmlFor="">Año</label>
            <select class="form-select" aria-label="Selecciona un año" name="año" onChange={handlers.carFormHandler}>
              <option>Año</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
            </div>
            <button type="button" className="btn btn-dark mt-3" onClick={() => {handlers.saveCar()}}>Guardar Coche</button>
          </form>
    )
}

export default CarForm