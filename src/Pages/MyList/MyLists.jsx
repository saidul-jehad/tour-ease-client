import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListTable from "./MyListTable";

const MyLists = () => {
    const { user } = useContext(AuthContext)
    const loadedTouristsSpot = useLoaderData()

    const myAdded = loadedTouristsSpot.filter(touristsSpot => touristsSpot.userEmail === user.email)
    const [touristsSpots, setTouristsSpots] = useState(myAdded)

    console.log(myAdded);
    return (
        <div>
            {
                touristsSpots.map(touristsSpot => <MyListTable
                    key={touristsSpot._id}
                    touristsSpot={touristsSpot}
                    setTouristsSpots={setTouristsSpots}
                    touristsSpots = { touristsSpots }
                    ></MyListTable>)
}
        </div >
    );
};

export default MyLists;