import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';

const TouristsSpot = ({ touristsSpot }) => {
    const { _id, spotName, countryName, location, seasonality, averageCost, travelTime, photoUrl } = touristsSpot
    return (
        <div className="card bg-base-100 shadow-xl p-6 border">
            <div> <figure><img className='rounded-xl mb-6' src={photoUrl} alt="Shoes" /></figure></div>

            <div className="">
                <div className='flex justify-between'>
                    <p className='text-2xl font-semibold'>{spotName}</p>
                    <p className='text-xl font-medium'>{countryName}</p>
                </div>

                <div className='flex justify-between w-full items-center'>
                    <div className='mt-4 space-y-3'>
                        <p>{seasonality}</p>
                        <p>{averageCost}</p>
                    </div>
                    <div>
                        <p className='mt-2 text-xl font-medium'>{travelTime}</p>
                    </div>
                </div>


                <div className='flex gap-3 border-t items-center pt-4 mt-4'>
                    <GrLocation className='text-2xl'></GrLocation>
                    <p>{location}</p>
                </div>

                <div className="card-actions justify-end mt-3">
                    <Link to={`/touristsSpotDetails/${_id}`}><button className="btn  bg-gradient-to-r from-cyan-500  to-rose-500 text-white ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};


TouristsSpot.propTypes = {
    touristsSpot: PropTypes.object
}

export default TouristsSpot;

