import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle } from 'react-leaflet'
// import L from 'leaflet';

const YourMap = () => {
  const center = [29.9728660, 77.3297851]
  const fillBlueOptions = { fillColor: 'blue' }

  // const factory = new L.divIcon({
  //   className: '',
  //   iconAnchor: [12, 25],
  //   labelAnchor: [-6, 0],
  //   popupAnchor: [0, -15],
  //   iconSize: [25, 41],
  //   html: `<span class="fa fa-industry"></span>`
  // });

  return (
    <div className="w-full flex justify-center">
      <MapContainer center={center} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} pathOptions={fillBlueOptions} radius={300} />
          <Circle
            center={center}
            pathOptions={fillBlueOptions}
            radius={200}
            stroke={false}
          />
        </LayerGroup>
        <Marker position={center}>
          <Popup>
            <span className="text-lg">Mectra India</span>  <br /> Office here
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default YourMap