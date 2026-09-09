import Image from 'next/image';
import { BusStop } from '../data/locations';

type DescriptionProps = {
    name: string;
    image: string;
    description: string;
    closest_stops: BusStop[];
}

export default function LocationDescription(descriptionProps: DescriptionProps) {
    const name = descriptionProps.name;
    const image = descriptionProps.image;
    const description = descriptionProps.description;
    const closest_stops = descriptionProps.closest_stops;
    return (
        <div className="w-full h-full md:pt-0 mt-8">
            <div className="w-10/12 mx-auto sm:flex bg-white rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-6">
                    <div className="md:w-1/2 p-7">
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="location font-JosefinSans">
                                {name}
                            </h2>
  
                            <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{__html: description}} />

                            <h3 className="font-JosefinSans font-semibold sm:text-2xl pt-3">
                                Closest Stops
                            </h3>
                            <table className="table-auto w-full">
                                <thead className="border-b-2">
                                    <tr>
                                        <th className="font-JosefinSans text-left w-1/4">Route</th>
                                        <th className="font-JosefinSans text-left w-3/4">Stop Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {closest_stops.map((route) => (
                                      <tr key={`${route.line}-${route.stop_name}`} className="border-b-1">
                                        <td className="pr-6 text-sm font-medium">{route.line}</td>
                                        <td className="text-sm font-medium">{route.stop_name}</td>
                                      </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <Image 
                          className="w-full h-auto max-w-lg rounded-lg object-cover"
                          width={500} height={0}
                          src={image} alt="Image showing the location." />
                    </div>
                </div>
            </div>
        </div>
    )
}