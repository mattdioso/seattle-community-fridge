import { Button } from '@headlessui/react'
import Image from 'next/image'

export default function Volunteer() {
    return (
        <section className="h-full w-full">
            <h1>Volunteer Opportunities</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full my-auto lg:w-1/2">
                    <Image width={1080} height={1080} src="https://storage.googleapis.com/seattle-community-fridge/volunteer/reid_volunteer.jpg" alt="reid_volunteer" />
                </div>
                <div className="w-full lg:w-1/3 h-full mx-auto text-black text-xl sm:text-3xl">
                    <Button as="a" href="https://docs.google.com/forms/d/1kMWMJjlL982TLGBM3iUvNhiHhGT0hwJF0sRY22gHEug/viewform" 
                        className="flex items-center justify-center border-black border bg-green-500 w-full h-30 rounded-lg text-black"
                        target="_blank" rel="noreferrer noopener">
                        Volunteer Sign-Up
                    </Button>

                    <ul className="space-y-6 mt-7 lg:mt-7">
                        <li>Food Donation pick-ups</li>
                        <li>Fridge cleaning</li>
                        <li>Host/food donor outreach</li>
                        <li>Volunteer Coordination</li>
                        <li>Social Media</li>
                        <li>... & More!</li>
                    </ul>
                    <p className="mt-14 lg:mt-20">
                        Questions about volunteering? Email <span><a href="seattlecommunityfridge@gmail.com" target="_blank" rel="noreferrer noopener">seattlecommunityfridge@gmail.com</a></span>!
                    </p>
                    <p>Check our <a href="/faq">FAQ page</a> if you have any questions or want to know more about SCF.</p>
                </div>
            </div>
        </section>
    )
}
