const { axios } = window;

export default {
  async fetchLabelteamworkrateData(date) {
    const response = await axios.get('/labour/labelteamworkrate', { params: { month: date } });
    return response;
  },
  async fetchedLabelteamnumData(date) {
    const response = await axios.get('/labour/labelteamnum', { params: { month: date } });
    return response;
  }
}