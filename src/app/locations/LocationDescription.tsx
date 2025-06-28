import Image from 'next/image';

export default function LocationDescription({ name, image, description }) {
    return (
        <div className="w-full h-full md:pt-0 mt-8">
            <div className="w-10/12 mx-auto sm:flex bg-white rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-6">
                    <div className="md:w-1/2 p-7">
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                {name}
                            </h2>
  
                            <p className="mt-4 text-gray-700">
                                {description}
                            </p>
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