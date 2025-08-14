import { useState } from "react";

export const useNEO = () => {

    const [startDate, endDate] = ['2025-08-01', '2025-08-05'];
    const [neo,setNeo] = useState(null);


    const getNEO = async() => {
        try {
            const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=V4wsiuDPl2fgRtWyBz1If6cw9WLg0lGWLvE64JTl`);
            const data = await res.json();
            console.log(data);
            setNeo(data);

        } catch (error) {
            console.log('Error fetching NEO data:', error);
        }
    }

    // const getCurrentNeo = async() => {
    //     try {
    //         const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/&api_key=V4wsiuDPl2fgRtWyBz1If6cw9WLg0lGWLvE64JTl`);
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (error) {
    //          console.log('Error fetching NEO data:', error);
    //     }
    // }
    return {startDate,endDate,neo,getNEO};
}