export type Location = {
    name: string;
    address: string;
    desc: string;
    full_description: string;
    coord: Coordinates;
    image: string;
};

export type Coordinates = {
    lat: number;
    lng: number;
};

export const location_data: Location[];