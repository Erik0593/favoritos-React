export default {
    getAllCars: async () => {
        let response = await fetch('https://react-crud-erik-15g-default-rtdb.firebaseio.com/coches.json')
        return await response.json()
    }
}