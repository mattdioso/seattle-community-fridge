'use client';
import { APIProvider, Map, AdvancedMarker, MapCameraProps, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";
import { Location, location_data } from '../data/locations';
import LocationDescription from './LocationDescription';

type DescriptionProps = {
    name: string;
    image: string;
    description: string;
}

export default function Locations() {

    const logo_img = "https://storage.googleapis.com/seattle-community-fridge/logo/SCF%20logo.jpg";
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [dialogLocation, setDialogLocation] = useState("");

    const [markerLocation, setMarkerLocation] = useState(location_data[0]['coord']);

    const INITIAL_CAMERA = {
        center: markerLocation,
        zoom: 16
    };

    const [cameraProps, setCameraProps] = useState<MapCameraProps>(INITIAL_CAMERA);
    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => setCameraProps(ev.detail), []);

    return (
        <section>
            <h1 className="text-3xl text-center sm:text-6xl mt-14 font-SauceTomato text-blue-500">Locations</h1>
            <div className="w-full h-full space-t-16 sm:pt-0 pt-20 mt-0 sm:mt-10">
                <div className="w-10/12 mx-auto sm:flex">
                    <div className="h-[250px] sm:h-[720px] w-full sm:w-1/2 border border-black rounded-lg">
                        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                            <Map mapId={"12345"} className="rounded-lg w-full h-full" {...cameraProps} onCameraChanged={handleCameraChange} gestureHandling={"greedy"} disableDefaultUI>
                                <AdvancedMarker position={markerLocation}>
                                    <img src={logo_img} className="w-9 h-9" />
                                </AdvancedMarker>
                            </Map>
                        </APIProvider>
                    </div>
                    <div className="w-full sm:w-1/2 bg-white rounded-b-lg sm:rounded-r-lg text-black space-y-6 p-4 pb-10 px-2">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-2xl">
                            Click "View" next to a fridge location to see details.
                        </h2>
                        {location_data.map((location, i) => (
                            <div key={`${location}_${i}`} className="flex justify-between px-7">
                                <div className="block">
                                    <p className="font-bold">{location.name}</p>
                                    <p>{location.address}</p>
                                    <p>{location.desc ? location.desc : ""}</p>
                                </div>
                                <button className="border-black border bg-blue-500 w-20 h-8 my-auto rounded-lg" onClick={() => {
                                    setSelectedLocation(location);
                                    setMarkerLocation(location.coord);
                                    const newCameraProps = cameraProps;
                                    newCameraProps.center = location.coord;
                                    setCameraProps(newCameraProps);
                                }}>View</button>
                            </div>
                        ))}
                    </div>
                </div>
                { selectedLocation != null && 
                    <LocationDescription name={selectedLocation.name} image={selectedLocation.image} description={selectedLocation.full_description}/>
                }
            </div>
        </section>
    )
}