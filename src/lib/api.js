const BASE_URL= 'https://react-crud-erik-15g-default-rtdb.firebaseio.com/'

export default {
    // aqui van a ir todas las peticiones a mi base de datos
    //firebase nos regresa un objeto
    getAllCars: async () => {
        let response = await fetch(`${BASE_URL}/coches.json`)
        return await response.json()
    },
    saveCar: async (carData) => {
        let response = await  fetch(`${BASE_URL}/coches.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
        return await response.json()
    }
}