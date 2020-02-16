import { PointLayer } from '@antv/l7';

export const addHospital = scene => {
  scene.addImage(
    'local',
    'https://gw.alipayobjects.com/zos/rmsportal/xZXhTxbglnuTmZEwqQrE.png',
  );

  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'longitude',
            y: 'latitude',
          }
        })
        .shape('local')
        .size('unit_price', [10, 25])
        .active(true)
        .color('name', ['#5B8FF9', '#5CCEA1', '#5D7092', '#F6BD16', '#E86452'])
        .style({
          opacity: 0.3,
          strokeWidth: 2,
        })
      scene.addLayer(pointLayer);
    });
}