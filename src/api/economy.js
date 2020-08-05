const { axios } = window;

export default {
  async fetchEconomyMeter(date) {
    const response = await axios.get('/economy/meter', { params: { ny: date } });
    return response.data;
  },
  async fetchEconomyClaim(date) {
    const response = await axios.get('/economy/claim', { params: { ny: date } });
    return response.data;
  },
  async fetchEconomyTable(date) {
    const response = await axios.get('/economy/table', { params: { ny: date } });
    return response.data;
  },
  
}
