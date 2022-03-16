const CarCard = props => {
    const { modelo, marca, año, picture } = props.carData
    return (
        <div className="col-12 col-md-6 mb-3">
            <div className="card border rounded car-card shadow">
                <img src={picture} alt="" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Modelo: {modelo}</li>
                        <li className="list-group-item">Marca: {marca}</li>
                        <li className="list-group-item">Año: {año}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarCard