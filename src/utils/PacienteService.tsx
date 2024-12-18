import axios from 'axios';

const BASE_URL = 'http://localhost:8080/pacientes';

const PacienteService = {

  getAll: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },

}

export default PacienteService;
