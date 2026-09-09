import Image from 'next/image';
import { Button } from '@headlessui/react'

export default function GetFood() {
    return (
        <section className="h-full w-full text-center">
            <h1>Getting Food</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl">
                    <ul className="space-y-6 lg:mt-4">
                        <li>Please come to our fridge spaces to get food!</li>
                    </ul>

                    <Button as="a" className="flex items-center justify-center border-black border bg-blue-500 w-full h-100 my-auto rounded-lg text-black" href="/locations" title="Fridge Map">
                      <div className="grid grid-cols-1 justify-items-center">
                        <div><Image width={200} height={0} src="/fridge_map_icon.png" id="Fridge Map" alt="Fridge Map" /></div>
                        <div>Fridge Locations</div>
                      </div>
                    </Button>
                </div>
            </div>
            <h1 className="text-3xl sm:text-6xl mt-8 font-JosefinSans text-blue-500">Food FAQ</h1>
            <div>
                <h2 className="question">What time or day can I come by for food?</h2>
                <p className="answer">
                    All of our fridges and pantries are open 24/7, all day and everyday. 
                    Come by these fridges any time or day to get food.
                    While we cannot guarantee when there will be food available, 
                    you can come by any time or day to check.
                </p>
                <h2 className="question">Will there always be food in the fridge?</h2>
                <p className="answer">
                     While we would like to be able to say that the fridges and pantries are always full, 
                     the fact is that the need is great and our resources are limited. 
                     We typically bring food on Tuesdays, Thursdays, and Saturdays--though
                     this sometimes changes--and the food goes quickly.
                </p>
                <h2 className="question">Can I find anything other than food at the fridge sites?</h2>
                <p className="answer">
                    While we mostly stock food in the fridges and pantries, 
                    we sometimes have emergency items such as first aid kits, 
                    sunscreen, masks and wipes, or personal hygiene items such as 
                    pads, tampons, combs, soap, toilet paper, etc. 
                    Other items may include emergency blankets, trash bags, water bottles, 
                    reusable grocery bags, or can openers. 
                    Please use the whiteboard we have inside our pantries 
                    to leave us a note and let us know if you would like to see anything else 
                    and we will do our best to provide those items.               
                </p>
                <h2 className="question">What kind of food will I find?</h2>
                <p className="answer">
                    Community members and food drop offs include all kinds of food 
                    such as fruits, vegetables, packaged sandwiches or frozen food. 
                    We cannot guarantee that there is a certain food available, 
                    but if you need something or would like to see more of a certain type of food, 
                    please use the whiteboard we have inside our pantries 
                    to leave us a note and let us know.
                    We will do our best to provide those items.
                </p>
                <h2 className="question">Where does the food come from?</h2>
                <p className="answer">
                    Food and pantry items come from community volunteers, 
                    neighborhood members, and friends.
                    Additionally, we receive donations from local food banks and schools 
                    to bring food to fill the fridges.
                </p>
                <h2 className="question">How much food can I take?</h2>
                <p className="answer">
                    We do not control how much food you take from the fridge 
                    and pantry. We invite community members to take what you need. 
                    With that, please be mindful and leave some for others so that 
                    we can all benefit from the shared community fridge.
                </p>
            </div>
        </section>
    )
}