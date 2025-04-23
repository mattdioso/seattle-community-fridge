export default function Calendar() {
    return (
      <div className="w-full">
        {/* Header Section */}
        <section className="w-full">
          <h1 className="text-blue-500 text-3xl sm:text-6xl font-SauceTomato text-center my-6">Calendar</h1>
        </section>
        
        {/* Calendar Section */}
        <section className="w-full flex justify-center my-8">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=48bcae034e7634e636bf2fd012a6f616e249cf119dc89cd3ccb73d48036f1785%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            style={{ border: 0 }} 
            width="800" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
          />
        </section>
        
        {/* Text Information Section */}
        <section className="w-full py-10">
          <div className="max-w-2xl mx-auto text-center px-4 text-black">
            <h2 className="text-xl font-bold mb-4 text-black">Upcoming Events</h2>
            <p className="mb-4 text-black">
              Are you hosting a mutual aid or community event in Seattle and would like to add it to our calendar? You can invite us!
            </p>
            
            <ul className="list-disc text-left max-w-md mx-auto mb-6 text-black">
              <li>On your computer, open Google Calendar.</li>
              <li>In the top left, click Create Add.</li>
              <li>Enter the event information.</li>
              <li>Under "Add guests," add the calendar ID you can find below.</li>
              <li>Click Save.</li>
            </ul>
            
            <p className="mb-6 text-black">
              <strong>Calendar ID:</strong> <br />
              <span className="text-sm break-all text-black">48bcae034e7634e636bf2fd012a6f616e249cf119dc89cd3ccb73d48036f1785@group.calendar.google.com</span>
            </p>
            
            <p className="text-black">
              Not able to make that work? Fill out a form here:
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM-soVwvRMQY0ApGHavnaNLjc3jkp4RLi48qhjlF-8ZwhFiA/viewform?usp=preview" className="text-blue-500 hover:underline ml-1">
              Suggest an event to the Seattle Community Fridge Calendar
              </a>
            </p>
          </div>
        </section>
      </div>
    );
  }
