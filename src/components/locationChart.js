import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const LocationChart = () => {
  // Dummy coordinates for 10 points
  const coordinates = [
    { coordinates: [-74.5, 40.7], name: 'Point A' },
    { coordinates: [-73.9, 40.5], name: 'Point B' },
    { coordinates: [-74.2, 40.8], name: 'Point C' },
    // Add more coordinates as needed
  ];

  return (
    <ComposableMap projection="geoEqualEarth" width={800} height={500}>
      {/* Render geographies (in this example, a single country) */}
      <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>

      {/* Render markers at specified coordinates */}
      {coordinates.map((point, index) => (
        <Marker key={index} coordinates={point.coordinates}>
          <circle r={4} fill="#F00" />
          <text textAnchor="middle" y={-10}>
            {point.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default LocationChart;
