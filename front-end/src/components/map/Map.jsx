import React, { useEffect, useState } from 'react';
import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import {addHospital} from './pointLayer';

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
        minZoom: 4,
        maxZoom: 14,
        token: 'eb0521cf7e382ff3fe92b010365cd795',
      }),
    };
    setScene(new Scene(mapOption));
  }, []);
  // 添加地图元素
  useEffect(() => {
    if (scene) {
      addHospital(scene);
    }
  }, [scene]);
  return (
    <div id='map'></div>
  );
}