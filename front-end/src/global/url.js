import Axios from 'axios';

export const urlMap = {
  mapIcon: 'https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*BJ6cTpDcuLcAAAAAAAAAAABkARQnAQ',

  baseURL: 'http://139.155.46.91:8080',
  hospital: '/api/hospital/info/list',

  mock: 'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
}

export async function requestHospital() {
    const res = await Axios.get(urlMap.hospital);
    return res.data.queryResult.list;
} 