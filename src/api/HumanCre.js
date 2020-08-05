const { axios } = window;

export default {
  async fetchHomeData(date) {
    const response = await axios.get('/employ/getCertificateInfo', { params: {} });
    return response;
  },
  async fetchedWebPreviewData(date) {
    const response = await axios.get('/previewing/getWebPreviewInfo', { params: {} });
    return response;
  }
}