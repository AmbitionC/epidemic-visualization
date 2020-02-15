import React, { useEffect, useState } from 'react';
import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const WU_HAN_POSITION = [114.3046920000, 30.5933100000];

export default () => {
  // 后续开发使用scene即可
  const [scene, setScene] = useState(null);
  // 加载地图
  useEffect(() => {
    const mapOption = {
      id: 'map',
      map: new GaodeMap({
        center: WU_HAN_POSITION,
        style: 'light',
        zoom: 11,
        minZoom: 10,
        maxZoom: 14,
        token: 'eb0521cf7e382ff3fe92b010365cd795',
      }),
    };

    const sceneWithLayer = new Scene(mapOption);

    sceneWithLayer.addImage(
      'local',
      'https://gw.alipayobjects.com/zos/rmsportal/xZXhTxbglnuTmZEwqQrE.png',
    );

    fetch(
      'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
    )
    .then(res => res.json())
    .then(data => {
      const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'longitude',
            y: 'latitude',
          }
        })
        .shape('local')
        .size('unit_price', [ 10, 25 ])
        .active(true)
        .color('name', ['#5B8FF9', '#5CCEA1', '#5D7092', '#F6BD16', '#E86452'])
        .style({
          opacity: 0.3,
          strokeWidth: 2,
        })
      sceneWithLayer.addLayer(pointLayer);
    });

    setScene(sceneWithLayer);
    
  }, []);
  return (
    <div id='map'></div>
  );
}