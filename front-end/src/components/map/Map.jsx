import React, { useEffect, useState } from 'react';
import { Scene } from '@antv/l7';
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
    setScene(new Scene(mapOption));
  }, []);
  return (
    <div id='map'></div>
  );
}