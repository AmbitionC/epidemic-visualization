import { Popup, Marker, MarkerLayer } from '@antv/l7';

import { urlMap, requestHospital } from 'global/url';

export const addHospital = scene => {
  scene.addImage(
    'marker',
    urlMap.mapIcon
  );
  requestHospital().then(data => {
    const colors = [ '#00BFFF', '#3CB371', '#FFA500', '#FFDEAD', '#98FB98'];
    const markerLayer = new MarkerLayer();
    for (let i = 0; i < data.length; i++){
      const popup = new Popup({
      })
        .setHTML(`地址: ${data[i].address}<br/>医院名称: ${data[i].hospitalName}<br/>联系电话: ${data[i].phoneNumber}`);
      const el = document.createElement('hospital');
      el.className = 'hospitallabel';
      el.style.background = colors[i%5];
      el.style.borderColor = colors[i%5];
      el.style.width = '18px';
      el.style.height = '18px';
      el.style.borderRadius = '9px';
      const marker = new Marker({
        element: el
      }).setLnglat({ lng: data[i].longitude * 1, lat: data[i].latitude})
        .setPopup(popup);

      markerLayer.addMarker(marker);
    }

    scene.addMarkerLayer(markerLayer);
  })
}
