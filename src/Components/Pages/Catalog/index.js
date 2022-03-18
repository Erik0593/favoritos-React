import { useEffect, useState } from "react"
import api from '../../../lib/api'
import CarCard from "../../CarCard"



const Catalog = () => {
    const [coches, setCoches] = useState({})
    useEffect(async () => {
        let data = await api.getAllCars()
        console.log(data)
        setCoches(data)
    }, [])
    return (
       <div className="container">
           <div className="row">
               {
                   Object.keys(coches).map( key => {
                       return <CarCard key={key}
                       carData={{...coches[key], carId:key}} 
                    //    editHandler={editCar}
                    />
                   }) 
               }
           </div>
       </div>
    )
}

export default Catalog