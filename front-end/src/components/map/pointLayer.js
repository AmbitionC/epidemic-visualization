import { PointLayer } from '@antv/l7';
import { requestHospitalInfo } from 'util/request';

export const addHospital = scene => {
  scene.addImage(
    'marker',
    'https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*BJ6cTpDcuLcAAAAAAAAAAABkARQnAQ',
  );
  requestHospitalInfo().then(data => {
    const pointLayer = new PointLayer()
      .source(data, {
        parser: {
          type: 'json',
          x: 'longitude',
          y: 'latitude',
        }
      })
      .shape('marker')
      .size(12)
      .active(true)
      .on('click', e => alert(e.feature.id))
    scene.addLayer(pointLayer);
  })
}