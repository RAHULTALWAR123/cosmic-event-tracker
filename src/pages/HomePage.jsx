/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNEO } from "../hooks/useNEO";
import EventCard from "../components/EventCard";

function HomePage() {
  const { startDate, endDate, neo, getNEO } = useNEO();
  const [isLoaded,SetIsLoaded] = useState(false);
  
  function getDatesBetween(start, end) {
      const dateArray = [];
      let currentDate = new Date(start);
      while (currentDate <= new Date(end)) {
          dateArray.push(currentDate.toISOString().split("T")[0]);
          currentDate.setDate(currentDate.getDate() + 1);
        }
        return dateArray;
    }
    
    const [dates, setDates] = useState(() => {
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setDate(end.getDate() + 2); // Add 3 days
  return getDatesBetween(start, end);
});

const LoadMore = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    setDates(getDatesBetween(start,end));
}



  useEffect(() => {
    getNEO();
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="font-semibold font-mono text-6xl">All Events</h1>
        <p className="font-medium text-lg font-mono">
          See all latest events
        </p>
      </div>

      <div className="mt-10 px-10 space-y-10">
        {dates.map((date) => (
          <div key={date}>
            {/* Date Heading */}
            <h2 className="text-2xl font-bold text-white mb-10 ">Showing all events for : {date}</h2>

            {/* NEO Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neo?.near_earth_objects?.[date]?.map((event) => {
                const avgDiameter = (
                  (event.estimated_diameter.kilometers.estimated_diameter_min +
                    event.estimated_diameter.kilometers.estimated_diameter_max) /
                  2
                ).toFixed(2);

                const closeApproach =
                  event.close_approach_data[0];
                const approachDate =
                  closeApproach.close_approach_date_full;

                return (
                  <EventCard event={event} avgDiameter={avgDiameter} approachDate={approachDate}/>
                );
              })}
            </div>
          </div>
        ))}
        {!isLoaded && 
        <div className="mt-10 text-center">
            <button onClick={() => {LoadMore(),SetIsLoaded(true)}} className="bg-blue-500 px-6 py-3 rounded-2xl">Load More</button>
        </div>
        }
      </div>
    </div>
  );
}

export default HomePage;
