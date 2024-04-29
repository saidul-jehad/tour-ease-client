import { useEffect, useState } from "react";
import TouristsSpot from "./TouristsSpot";


const TouristsSpots = () => {
    const [touristsSpots, setTouristsSpots] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tourists')
            .then(res => res.json())
            .then(data => {
                setTouristsSpots(data);
            })
    }, [])


    return (
        <div className="mt-10">
            <h3 className="text-center font-semibold text-2xl mb-3">Destinations</h3>
            <p className="text-center text-xl font-medium mb-5"> Choose Your Place</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    touristsSpots.map(touristsSpot => <TouristsSpot
                        key={touristsSpot._id}
                        touristsSpot={touristsSpot}
                    ></TouristsSpot>)
                }
            </div>

        </div>
    );
};

export default TouristsSpots;