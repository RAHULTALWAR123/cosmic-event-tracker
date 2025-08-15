import { useState } from "react";
import { useDateStore } from "../stores/useDateStore";
import toast from "react-hot-toast";

export const useNEO = () => {

const { startDate, endDate } = useDateStore(); 
    const [neo,setNeo] = useState(null);
    const [loading,setLoading] = useState(false)


    const getNEO = async() => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${import.meta.env.VITE_NASA_API_KEY}`);
            const data = await res.json();
            console.log(data);
            setNeo(data);
        

        } catch (error) {
toast.error(error.message || "Something went wrong while fetching data");
            console.log('Error fetching NEO data:', error);
        }
        finally{
            setLoading(false);
        }
    }

    
    return {startDate,endDate,loading,neo,getNEO};
}