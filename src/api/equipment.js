const { axios } = window;

export default {
  async fetchEquipments(ny = `${(new Date()).getFullYear()}-${('00' + ((new Date()).getMonth())).substr(-2)}`) {
    const response = await axios.get('/equipment/equipment', { params: { ny } });
    return response.data;
  },
  async fetchEquipmentsByProject(projectId, ny) {
    const response = await axios.get('/equipment/findByProjectId', { params: { projectId, ny } });
    return response.data;
  },
  async fetchFindAllEquipmentData(ny = `${(new Date()).getFullYear()}-${('00' + ((new Date()).getMonth())).substr(-2)}`) {
    const response = await axios.get('/equipment/findAllEquipment', { params: { ny } });
    return response.data;
  }
}
