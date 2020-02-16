import { PointLayer } from '@antv/l7';

import { urlMap } from '../../global/url';

export const addHospital = scene => {
  scene.addImage(
    'local',
    urlMap.mapIcon,
  );

  fetch(
    urlMap.mock
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