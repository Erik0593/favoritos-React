import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const CarDetail = () => {
    const [selectedCar, setSelectedCar] = useState({})
    const {id} = useParams()

    useEffect( async () => {
        let result = await fetch(`https://react-crud-erik-15g-default-rtdb.firebaseio.com/coches/${id}.json`)
        setSelectedCar( await result.json() )
    },[])

    console.log(id)
    return (
        <h1>{selectedCar.name}</h1>
    )
}

export default CarDetail