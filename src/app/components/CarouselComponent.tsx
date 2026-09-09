import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function Component() {
  return (
    <div className="h-[18rem] sm:h-[25rem] md:h-[32rem] lg:h-[30rem] xl:h-[39rem] 2xl:h-[48rem] w-full">
      <Carousel className="h-full">
        <Image preload={true} width={500} height={500} sizes="(max-width:48rem) 100vw, 50vw" src={"/scf_1750.png"} className="object-scale-down h-full" alt="Seattle Community Fridge big logo." />
        <Image preload={true} width={800} height={600} sizes="(max-width:48rem) 100vw, 50vw" src={"/slideshow/CapHill.png"} className="object-contain h-full" alt="Capitol Hill fridge." />
        <Image preload={true} width={800} height={600} sizes="(max-width:48rem) 100vw, 50vw" src={"/slideshow/Estelitas.png"} className="object-contain h-full" alt="Estelitas fridge in Central District." />
        <Image preload={true} width={800} height={600} sizes="(max-width:48rem) 100vw, 50vw" src={"/slideshow/Phinney.png"} className="object-contain h-full" alt="Phinney Ridge fridge." />
        <Image preload={true} width={800} height={600} sizes="(max-width:48rem) 100vw, 50vw" src={"/slideshow/Burien.png"} className="object-contain h-full" alt="Burien fridge." />
      </Carousel>
    </div>
  );
}
