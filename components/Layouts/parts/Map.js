import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

import { LocationMarkerIcon } from '@heroicons/react/solid';

export default function Map({ maps }) {
    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinatesMap = maps?.map(({ long, lat }) => ({
        longitude: long,
        latitude: lat,
    }));

    const center = getCenter(coordinatesMap);
    const [isViewport, setIsViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
        width: '100%',
        height: '100%',
    });

    return (
        <ReactMapGL
            {...isViewport}
            mapStyle={process.env.mapbox_style}
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewport) => setIsViewport(nextViewport)}
        >
            {maps?.map((result) => (
                <div key={`index-${result.long}`}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <span onClick={() => setSelectedLocation(result)} role="img" aria-label="push-pin" >
                            <LocationMarkerIcon
                                className="h-6 w-6 text-white cursor-pointer animate-bounce"
                            />
                        </span>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : false}
                </div>
            ))}
        </ReactMapGL>
    )
}
