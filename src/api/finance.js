const { axios } = window;

export default {
  async fetchFinance(date) {
    const response = await axios.get('/finance/finance', { params: { ny: date } });
    return response;
  },
}
