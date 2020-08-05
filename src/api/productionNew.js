const { axios } = window

export default {
  async fetchProManData(date) {
    const response = await axios.get('/production/summary', { params: { ny: date } });
    return response;
  },
  // 自营
  async fetchSelfBusinessData(date) {
    const response = await axios.get('/production/selfSupport', { params: { ny: date } });
    return response;
  },
  // 联营J
  async fetchJoinSupportData(date) {
    const response = await axios.get('/production/joinSupport', { params: { ny: date } });
    return response;
  },
  // 工期滞后
  async fetchLagListData(date) {
    const response = await axios.get('/production/delayRate', { params: { ny: date } });
    return response;
  },
  // 上个月完成产值情况
  async fetchPlanfinishlMonthData(date) {
    const response = await axios.get('/production/planfinishlmonth', { params: { ny: date } });
    return response;
  },
  // 本月完成产值情况
  async fetchlannmonthData(date) {
    const response = await axios.get('/production/plannmonth', { params: { ny: date } });
    return response;
  },
  // 获取机构名称
  async fetchGetDeptNumNameData(date) {
    const response = await axios.get('/dept/getDeptNumName');
    return response;
  },
  async fetchPlannmonthData(date) {
    const response = await axios.get('/production/plannmonth', { params: { ny: date } });
    return response;
  }
}