const { axios } = window;

export default {
  async fetchedWebPreviewInfo(date) {
    const response = await axios.get('/proviewinfo/getWebProviewInfo', { params: { 
      pid: date } });
    return response;
  },
  async fetchGetDepartProductionData(date) {
    const response = await axios.get('/production/getDepartProduction', { params: { pid: date } });
    return response;
  },
  //   // 上个月完成产值情况
  async fetchPlanfinishlMonthData1(date) {
    const response = await axios.get('/production/planfinishlmonth', { params: { ny: date } });
    return response;
  },
  //项目简介
  async fetchProjectIntroduction(deptId) {
    const response = await axios.get('/deptdesc/findDeptDesc', { params: { deptId: deptId } });
    return response;
  },
}