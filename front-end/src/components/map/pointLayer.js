import { PointLayer } from '@antv/l7';

import { urlMap, requestHospital } from 'global/url';

export const addHospital = scene => {
  scene.addImage(
    'marker',
    urlMap.mapIcon
  );
  requestHospital().then(data => {
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