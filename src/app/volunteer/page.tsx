export default function Volunteer() {
    return (
        <section className="h-full w-full">
            <h1 className="text-blue-500 text-3xl sm:text-6xl font-SauceTomato text-center my-6">Volunteer Opportunities</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full my-auto lg:w-1/2">
                    <img src="https://storage.googleapis.com/seattle-community-fridge/volunteer/reid_volunteer.jpg" alt="reid_volunteer"></img>
                </div>
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl font-SauceTomato">
                    <ul className="space-y-6 mt-14 lg:mt-36">
                        <li>Food Donation pick-ups</li>
                        <li>Fridge cleaning</li>
                        <li>Host/food donor outreach</li>
                        <li>Volunteer Coordination</li>
                        <li>Social Media</li>
                        <li>... & More!</li>
                    </ul>
                    <p className="mt-14 lg:mt-20">
                        Click <span><a className="text-blue-500" href="https://docs.google.com/forms/d/e/1FAIpQLScKSmgHNqrJ50aL7OyEs5vO82k2IfZeQv8SD5wFFKXkJqX4Ew/viewform" target="_blank">here</a></span> to get started!
                    </p>
                </div>
            </div>
        </section>
    )
}