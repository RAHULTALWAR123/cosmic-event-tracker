/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner";
import EventView from "../components/EventView";
import {motion} from "framer-motion"

function EventDetail() {
  const { id } = useParams();
  const [neo, setNeo] = useState(null);

  const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  const getCurrentNeo = async () => {
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=V4wsiuDPl2fgRtWyBz1If6cw9WLg0lGWLvE64JTl`
    );
    const data = await res.json();
    setNeo(data);
  };

  useEffect(() => {
    getCurrentNeo();
  }, []);

  if (!neo) return <LoadingSpinner />;

  const closeApproach = neo.close_approach_data?.[0];
  const avgDiameter = (
    (neo.estimated_diameter.kilometers.estimated_diameter_min +
      neo.estimated_diameter.kilometers.estimated_diameter_max) /
    2
  ).toFixed(2);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen p-4 md:p-8"
    >

        <motion.h1
        variants={headingVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white"
      >
        Event Details – {neo.name}
      </motion.h1>


      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <EventView
          neo={neo}
          closeApproach={closeApproach}
          avgDiameter={avgDiameter}
        />
      </motion.div>
    </motion.div>
  );
}

export default EventDetail;