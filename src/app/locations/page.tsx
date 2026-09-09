'use client';
import { APIProvider, Map, AdvancedMarker, MapCameraProps, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";
import { Button } from '@headlessui/react';
import Link from 'next/link'
import { Location, location_data } from '../data/locations';
import LocationDescription from './LocationDescription';

export default function Locations() {

    const logo_img = "/scf_36@2x.png";
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    // Starts centered on the Capitol Hill fridge since it's closest to the middle of the city
    const [markerLocation, setMarkerLocation] = useState(location_data[2]['coord']); 

    const INITIAL_CAMERA = {
        center: markerLocation,
        zoom: 11
    };

    const [cameraProps, setCameraProps] = useState<MapCameraProps>(INITIAL_CAMERA);
    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => setCameraProps(ev.detail), []);

    return (
        <section>
            <h1>Locations</h1>
            <div className="w-full h-full space-t-16 sm:pt-0 pt-0 mt-0 sm:mt-10">
                <div className="w-10/12 mx-auto sm:flex">
                    <div className="h-[400px] sm:h-[720px] w-full sm:w-1/2 border border-black rounded-lg">
                        <APIProvider apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }>
                            <Map mapId={"12345"} className="rounded-lg w-full h-full" {...cameraProps} onCameraChanged={handleCameraChange} gestureHandling={"greedy"} disableDefaultUI>
                                {location_data.map((location, i) => ( // Display all of the markers on screen.
                                    <AdvancedMarker position={location.coord} key={i}>
                                        <img src={logo_img} className="w-9 h-9" />
                                    </AdvancedMarker>
                                ))}
                            </Map>
                        </APIProvider>
                    </div>
                    <div className="w-full sm:w-1/2 bg-white rounded-b-lg sm:rounded-r-lg text-black space-y-6 p-4 pb-10 px-2">
                        <h2 className="location font-JosefinSans">
                            Click "View" next to a fridge location to see details.
                        </h2>
                        {location_data.map((location, i) => (
                            <div key={`${location}_${i}`} className="flex justify-between px-7">
                                <div className="block">
                                    <p className="font-bold font-JosefinSans">{location.name}</p>
                                    <p>{location.address}</p>
                                    <p>{location.desc ? location.desc : ""}</p>
                                </div>
                                <Button key={`button_${location}_${i}`} className="border-black border bg-blue-500 w-20 h-8 my-auto rounded-lg" onClick={() => {                                    setSelectedLocation(location);
                                    setMarkerLocation(location.coord);
                                    const newCameraProps = cameraProps;
                                    newCameraProps.center = location.coord;
                                    newCameraProps.zoom = 15;
                                    setCameraProps(newCameraProps);
                                }}>View</Button>
                            </div>
                        ))}
                        <p>Check Seattle's <Link href="https://www.pantrymap.org/map">Pantry Map</Link> for local pantries near you as well!</p>
                    </div>
                </div>
                { selectedLocation != null && 
                    <LocationDescription 
                        name={selectedLocation.name} 
                        image={selectedLocation.image} 
                        description={selectedLocation.full_description}
                        closest_stops={selectedLocation.closest_stops}
                    />
                }
            </div>
        </section>
    )
}