import Link from 'next/link';

export default function Faq() {
    return (
        <section className="text-center">
            <h1 className="text-3xl sm:text-6xl mt-8 font-JosefinSans text-blue-500">FREQUENTLY ASKED QUESTIONS</h1>
            <div>
                <h2 className="question">What can I donate?</h2>
                <p className="answer">
                    Any wholesome food that you would gladly feed your loved ones.
                </p>
                <h2 className="question">How can I donate food?</h2>
                <p className="answer">
                    Simply go to a fridge and donate food and anything you think people might need. Things that need refrigerating should go into the fridge; other things should go into the pantry.
                </p>
                <h2 className="question">Do you accept expired food?</h2>
                <p className="answer">
                    Yes. Donate food that you would eat yourself. Avoid refreezing food that has been thawed, 
                    and if the packaging has been left open or the food has gone bad, throw it out.
                    Also, please don’t put questionable produce or other marginal perishables in the fridge. 
                    Hungry people want to eat exactly what you want to eat and are no more likely to eat food going bad than you are.
                </p>
                <p className="answer">
                    Most expiration dates on things like canned food are not based on any scientific or legal criteria 
                    and are mostly a way to encourage us to throw away perfectly good food and buy more. 
                    Please see this <Link href="https://www.usda.gov/Linkbout-usda/news/blog/save-money-knowing-when-food-safe">
                        USDA article
                    </Link> to find out more.
                </p>
                <p className="answer">
                    <Link href="https://www.theguardian.com/environment/2023/may/13/food-labels-expiration-dates-safe-to-eat">This Guardian article</Link> explains
                    how food expiration dates work and whether foods are unsafe to eat.
                </p>
                <h2 className="question">Can I cook up a big pan of something and put the whole thing in the fridge?</h2>
                <p className="answer">
                    No. As soon as one person accesses a large pan of food it’s considered contaminated. 
                    It may feel wasteful, but the only way we can accept such food is in individual containers. 
                    If you want to do this and need compostable containers, we can sometimes supply 
                    them; <Link href="mailto:seattlecommunityfridge@gmail.com">contact us</Link> to find out more.
                </p>
                <h2 className="question">How can I donate money?</h2>
                <p className="answer">
                    Any way you like! We can accept cash and checks, of course, but the easiest way is through
                    our <Link href="https://www.wagives.org/organization/Seattle-Community-Fridge">Washington Gives page</Link>, 
                    where you can use any method of payment you like. 
                    Because we are all volunteers and have essentially no overhead, 
                    nearly 100% of your donation will go to helping those in need.
                </p>

                <h2 className="question">How can I help?</h2>
                <p className="answer">
                    In general, anyone can donate food or go to a fridge now and then to make sure it 
                    and the pantry are organized and clean. Beyond those simple but essential tasks, 
                    there are many ways you can get involved; please see 
                    the <Link href="/volunteer">volunteer page here</Link>.
                </p>

                <h2 className="question">Where are your fridges located?</h2>
                <p className="answer">
                    Please see the <Link href="/locations">locations page</Link>; this includes both the address and the nearest bus routes.
                </p>

                <h2 className="question">Isn't it hazardous for just anyone to donate to the fridges and pantries?</h2>
                <p className="answer">
                    The community fridge system has been in place for 
                    decades <Link href="https://apnews.com/article/food-waste-switzerland-germany-geneva-austria-refrigerators-environment-fc8484f267f1403a4b76db8b20541f9a">all over the world</Link>, 
                    and the incidence of food-borne illness or other issues are extremely rare. 
                    The benefits of being able to freely give and receive food far outweigh any potential hazards.
                </p>

                <h2 className="question">Isn't there a liability issue?</h2>
                <p className="answer">
                    We have liability insurance, but generally speaking liability has not been an issue, either here or elsewhere around the world. 
                    Please see <Link href="https://drive.google.com/file/d/1O_44v7yoTkj3BIqw6SImhFrfygohMJgv/view">this article from Freedge</Link> about food liability and the fridges.

                    Those who provide food in good faith are also protected by the <Link href="https://app.leg.wa.gov/RCW/default.aspx?cite=69.80.031">Washington State Good Samaritan Food Donation Act.</Link><br/><br/>

                    <Link href="https://www.theselc.org/mutual_aid_toolkit#h_6118206432711598469694450">This page from The Sustainable Economies Law Center</Link> explains the potential risks and how to protect oneself.
                </p>

                <h2 className="question">Do you accept things other than food?</h2>
                <p className="answer">
                    Yes! Anything you think people might need is welcome. We always stock menstrual products (more are always welcome), 
                    but soap, shampoo, combs, brushes, that sort of thing are very nice to have in stock.
                </p>

                <h2 className="question">What is mutual aid? How is it different from charity?</h2>
                <p className="answer">
                    Mutual aid is neighbors helping neighbors on an equal basis. 
                    Charity is inherently paternalistic, in that the giver determines what is needed (and what is not) and who deserves to get what and how much. 
                    Charity also has the unintended consequence of perpetuating harm by institutionalizing need. 
                    Mutual aid begins from the assumption that needs not being met are the result of societal inequity and systemic injustice.
                </p>

                <h2 className="question">How are community fridges different from food banks?</h2>
                <p className="answer">
                    We don't wish to denigrate the work of food banks–they feed a lot of people, far more than we can. 
                    Some also give us their excess food to distribute, for which we are grateful. 
                    But food banks fall solidly into the charity mindset, with an inherently authoritarian structure to the way food is distributed. 
                    They also inadvertently perpetuate hunger by institutionalizing it; 
                    one need only look at the beautiful, huge structures they have built to house their services to understand that hunger is, 
                    whether they intend it or not, a permanent societal fixture which, from that perspective, 
                    can only be addressed through corporatized charity.
                </p>
                <p className="answer">
                    This <Link href="https://www.forbes.com/sites/afdhelaziz/2021/05/05/the-rise-of-community-fridges-a-beautiful-idea-worth-spreading-so-we-can-practice-mutual-aid-with-each-other/">Forbes article</Link> explains
                    the philosophy of community fridges and how they strengthen communities. 
                </p>

                <h2 className="question">Are there political or ideological ideas behind mutual aid and/or SCF?</h2>
                <p className="answer">
                    Not explicitly, but please read the Community Understandings at the end of this document. 
                    We do not advocate any particular ideology, but are in broad agreement that need derives from injustice, not moral failing.
                </p>

                <h2 className="question">How often do you clean the fridges?</h2>
                <p className="answer">
                    As often as we can, and a minimum of once a week. The fact is that the fridges are so often accessed that 
                    daily spot cleaning and a weekly thorough clean would be ideal, but that’s not always realistic because we are all volunteers with lives.
                </p>

                <h2 className="question">How does the organization work? Who's in charge?</h2>
                <p className="answer">
                    We are a non-hierarchical collective, which means we are all in charge. As soon as you join us you have an equal voice. 
                    Don’t worry, though–“non-hierarchical collective” is just our fancy way of saying we are a bunch of people who care and 
                    do what we can to make our neighbors’ lives better without getting all hung up in structures of domination and control.
                </p>

                <h2 className="question">Are you a not-for-profit?</h2>
                <p className="answer">
                    We are a sponsored nfp through <Link href="https://freedge.org/">freedge.org</Link> (aka Left Lovers)
                </p>
                <h2 className="question">Some mutual aid groups distrust not-for-profit status;<br/>why is this and how are you different?</h2>
                <p className="answer">
                    Because we have physical infrastructure, we worry that there may be liability associated with our 
                    work (a fridge being tipped and falling on someone, for example). 
                    Being part of an incorporated entity at least to some extent shields those who work with us from personal liability.
                </p>
                <p className="answer">
                    We do understand the distrust our fellow mutual aid groups feel toward many nfp organizations. 
                    Please see the discussion above about the difference between mutual aid and charity. 
                    Most nfp’s are engaged in charity. We strive to do an ongoing examination of our motives and actions to keep from falling into that trap.
                </p>
                <h1 className="text-3xl sm:text-4xl">Seattle Community Fridge Community Understandings</h1>
                <p className="answer">
                    Everyone who works with SCF represents us; our shared values are reflected in the work we do, as well as the interactions we have at the fridges and elsewhere. 
                    By accepting a volunteer position with SCF, you are agreeing to work within these values:
                </p>
                <ul>
                    <li>
                        <p className="answer">
                            We go into this work with kindness, consideration, open-heartedness, and an assumption of absolute equality.
                        </p>
                    </li>
                    <li>
                        <p className="answer">
                            Our work is grounded in an understanding and investigation of the root causes of hunger 
                            and the intersection of food insecurity with other forms of injustice, 
                            including but not limited to gender, sexual, racial, and disability justice struggles. 
                            It is vital that every action you take on behalf of SCF be informed by your own consideration 
                            of these issues and inequities.
                        </p>
                    </li>
                    <li>
                        <p className="answer">
                            Notwithstanding everything above, we are here primarily to provide food and reduce food waste. 
                            Any impulse to enforce ideological purity as a condition for doing this work should be avoided 
                            if it interferes with that primary purpose. 

                            We ask that you conform to the values stated above to work with SCF, 
                            but beyond that we do not judge anyone's beliefs.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}