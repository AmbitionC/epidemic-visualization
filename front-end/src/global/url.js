import Axios from 'axios';

export const urlMap = {
  mapIcon: 'https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*BJ6cTpDcuLcAAAAAAAAAAABkARQnAQ',

  baseURL: 'http://139.155.46.91:8080',
  hospital: '/api/hospital/info/list',

  mock: 'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
}

export async function requestHospital() {
    // const res = await Axios.get(urlMap.hospital);
    // return res.data.queryResult.list;
    const res = await Axios.get('/api/hospital');
    return res.data.queryResult.list;
} 

export async function requestCity() {
  const res = await Axios.get('https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=湖北省');
  return res.data.results[0].cities[0];
}

export function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}