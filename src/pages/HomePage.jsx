/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNEO } from "../hooks/useNEO";
import EventCard from "../components/EventCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";
import { useDateStore } from "../stores/useDateStore";


function HomePage() {
  const { loading, neo, getNEO } = useNEO();
  const { startDate, endDate, setStartDate, setEndDate } = useDateStore();
  const [dates, setDates] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [dateError, setDateError] = useState("");

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  function getDatesBetween(start, end) {
    const dateArray = [];
    let currentDate = new Date(start);
    while (currentDate <= new Date(end)) {
      dateArray.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

useEffect(() => {
    const allDates = getDatesBetween(startDate, endDate);
    if (allDates.length > 7) {
      setDateError("Cant Load More !");
      setDates([]);
    } else {
      setDateError("");
      if (showAll) {
        setDates(allDates);
      } else {
        setDates(allDates.slice(0, 3));
      }
    }
  }, [startDate, endDate, showAll]);

  useEffect(() => {
    getNEO();
  }, [startDate, endDate]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setShowAll(false); 
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setShowAll(false); 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="font-semibold font-mono sm:text-6xl text-5xl">All Events</h1>
        <p className="font-medium text-md font-mono">
          See all latest events
        </p>
      </div>

      <div className="mt-10 flex justify-center items-center sm:gap-4 py-4">
  
  <div className="flex flex-col items-center">
    <label className="text-xs font-medium text-gray-300 mb-1 uppercase tracking-wider">Start Date</label>
    <div className="relative">
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600 hover:border-gray-500 transition-all cursor-pointer shadow-md"
      />
    </div>
  </div>

  <span className="text-gray-400 font-medium mt-5">→</span>

  <div className="flex flex-col items-center">
    <label className="text-xs font-medium text-gray-300 mb-1 uppercase tracking-wider">End Date</label>
    <div className="relative">
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600 hover:border-gray-500 transition-all cursor-pointer shadow-md"
      />
    </div>
  </div>
</div>

<div>
<p className="sm:text-sm text-xs text-gray-500 text-center">
  * You can fetch a maximum of <span className="font-semibold">7 days</span> at once.
</p>
{dateError && (
          <p className="text-red-500 text-center font-semibold mt-2">{dateError}</p>
)}

</div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-10 px-10 space-y-10">
          {dates.map((date) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={date}
            >
              <h2 className="sm:text-3xl text-xl font-extrabold text-white mb-8 pb-4 border-b border-white/20">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  Events for:
                </span>
                <span className="ml-2">{date}</span>
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {neo?.near_earth_objects?.[date]?.map((event) => {
                  const avgDiameter = (
                    (event.estimated_diameter.kilometers.estimated_diameter_min +
                      event.estimated_diameter.kilometers.estimated_diameter_max) /
                    2
                  ).toFixed(2);

                  const closeApproach = event.close_approach_data[0];
                  const approachDate = closeApproach.close_approach_date_full;

                  return (
                    <EventCard
                      key={event.id}
                      event={event}
                      avgDiameter={avgDiameter}
                      approachDate={approachDate}
                    />
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
          {!showAll && dateError === "" && dates.length < getDatesBetween(startDate, endDate).length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 px-6 py-3 rounded-2xl"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;