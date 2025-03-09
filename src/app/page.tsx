'use client';
import React, { useState } from 'react';
import Sidebar from "./components/navigation/sidebar";
import Navigation from './components/navigation';

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
        
        <h1 className="text-3xl sm:text-6xl mt-14 font-SauceTomato text-blue-500">SEATTLE COMMUNITY FRIDGE</h1>

        <div className="sm:flex sm:space-x-4 mt-4 px-6 justify-center">
          <img src={pic} alt="scf_pic"></img>
            {/* {
              pics.map((pic: string, i: number) => (
                <div key={i.toString()} className="w-full sm:w-1/4 overflow-x-hidden">
                  <img src={pic} key={i.toString()} alt={i.toString()}></img>
                </div>
              )

              )
            } */}
        </div>
      </main>
    </div>
  );
}
