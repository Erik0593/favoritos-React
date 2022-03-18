import { Link } from "react-router-dom"

const CarCard = props => {
    const {editHandler} = props
    const { modelo, marca, año, picture, carId } = props.carData
    return (
        <div className="col-12 col-md-6 mb-3">
        <Link to={`car-detail/${carId}`}>
            <div className="card border rounded car-card shadow">
                <img src={picture} alt="" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Modelo: {modelo}</li>
                        <li className="list-group-item">Marca: {marca}</li>
                        <li className="list-group-item">Año: {año}</li>
                    </ul>
                    <button className="btn btn-dark mt-3" onClick={editHandler} data-car-id={carId}>Editar</button>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default CarCard