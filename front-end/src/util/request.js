import Axios from 'axios';

const urls = {
  hospitalInfo: '/api/hospital/info/list'
}

export async function requestHospitalInfo() {
  const res = await Axios.get(urls.hospitalInfo);
  return res.data.queryResult.list;
}