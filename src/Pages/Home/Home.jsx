import Banner from "./Banner/Banner";
import Countries from "./Countries/Countries";
import TouristsSpots from "./TouristsSpot/TouristsSpots";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;