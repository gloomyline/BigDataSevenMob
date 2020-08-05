const { axios } = window;
export default {
  async fetchTypeA(date) {
    const response = await axios.get('/material/typeA', { params: { ny: date } });
    return response;
  },
  async fetchTypeB(date) {
    const response = await axios.get('/material/typeB', { params: { ny: date } });
    return response;
  },
  async fetchTypeC(date) {
    const response = await axios.get('/material/typeC', { params: { ny: date } });
    return response;
  },
  async fetchRateA(date) {
    const response = await axios.get('/material/rateMonthA', { params: { ny: date } });
    return response;
  },
  async fetchRateB(date) {
    const response = await axios.get('/material/rateMonthB', { params: { ny: date } });
    return response;
  },
  async fetchRateC(date) {
    const response = await axios.get('/material/rateMonthC', { params: { ny: date } });
    return response;
  },
  async fetchProjectDetails(deptId,ny) {
    console.log("fechprojectdate",ny)
    const response = await axios.get('/material/threePage', { params: { deptId:deptId,ny:ny } });
    return response;
  }
}