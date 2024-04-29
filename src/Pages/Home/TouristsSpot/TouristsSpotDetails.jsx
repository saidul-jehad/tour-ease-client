import { GrLocation } from "react-icons/gr";
import { useLoaderData, useParams } from "react-router-dom";

const TouristsSpotDetails = () => {

    const loadedTouristsSpot = useLoaderData()
    const { id } = useParams()

    const touristsSpot = loadedTouristsSpot.find(touristsSpot => id === touristsSpot._id)
    const { spotName, countryName, location, description, seasonality, averageCost, travelTime, totalVisitor, photoUrl } = touristsSpot

    return (
        <div className="bg-base-100 shadow-xl p-6 border w-[98%] mx-auto rounded-xl">
            <div className=" gap-7 flex flex-col lg:flex-row">
                <div className="flex-1"> <figure><img className='rounded-xl mb-6' src={photoUrl} alt="Shoes" /></figure></div>

                <div className="flex-1  p-5 rounded-xl border-l">
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


                    <div className='border-b py-4 mt-4 flex w-full justify-between'>
                        <div className="flex gap-3 items-center  "><GrLocation className='text-2xl'></GrLocation>
                            <p>{location}</p></div>
                        <p className="">{totalVisitor}</p>
                    </div>

                    <div className="mt-11">
                        <h3> <span className="text-xl font-semibold">Description :</span> {description}</h3>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TouristsSpotDetails;