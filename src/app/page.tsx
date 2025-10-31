'use client';
import React, { useState } from 'react';
import Sidebar from "./components/navigation/sidebar";
import Navigation from './components/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const pics = [
    "https://storage.googleapis.com/seattle-community-fridge/home/20240814_081814.jpg",
    "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20230825_121830_527.jpg",
    "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20241114_115001_203.webp",
    "https://storage.googleapis.com/seattle-community-fridge/home/e7eb6214-dae2-48e9-9cf3-b3bdee93635d.jpg"
  ]

  const pic = "https://storage.googleapis.com/seattle-community-fridge/home/200820_de_communityfridge_hero_teaser.jpg.jpg";

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <main className="text-center">
        <h1 className="text-3xl sm:text-6xl mt-6 font-SauceTomato text-blue-500">SEATTLE COMMUNITY FRIDGE</h1>
        <div className="block lg:flex w-10/12 mx-auto">
          <div className="w-full my-auto lg:w-1/2">
	      <Image 
              	width={500} height={0} src={"/fridge-images/scf-frontpage.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
              {/* {
                pics.map((pic: string, i: number) => (
                  <div key={i.toString()} className="w-full sm:w-1/4 overflow-x-hidden">
                    <img src={pic} key={i.toString()} alt={i.toString()}></img>
                  </div>
                )

                )
              } */}
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl">
              <p className="text-gray-700">
                  Seattle Community Fridge is a mutual aid group that provides refrigerators and pantries in order to combat food insecurity.
		  Click <Link className="text-blue-500" href="/locations">here</Link> for a list of our fridges.
              </p>
          </div>
        </div>
        <h2 className="text-2xl md:text-5xl mt-14 font-SauceTomato text-blue-500">UPCOMING EVENTS</h2>
        <div className="w-full flex justify-center my-8">
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showTz=0&showCalendars=0&showDate=0&showPrint=0&src=NDhiY2FlMDM0ZTc2MzRlNjM2YmYyZmQwMTJhNmY2MTZlMjQ5Y2YxMTlkYzg5Y2QzY2NiNzNkNDgwMzZmMTc4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00" 
            style={{ border: 0 }} 
            width="800" 
            height="400" 
            frameBorder="0" 
            scrolling="no"
          />
        </div>
      </main>
    </div>
  );
}
