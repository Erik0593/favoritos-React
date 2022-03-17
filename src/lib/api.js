const BASE_URL = 'https://crud-vacantes-default-rtdb.firebaseio.com'

export default {
    // aqui van a ir todas las peticiones al router
    getAllJobs: async () => {
        let response = await fetch(`${BASE_URL}/vacante.json`)
        return await response.json()
    },
    saveJob: async jobData => {
        let response = await fetch(`${BASE_URL}/vacante.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jobData)
        })
        return await response.json()
      },
    
}