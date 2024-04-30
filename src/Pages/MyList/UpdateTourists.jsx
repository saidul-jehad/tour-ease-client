import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTourists = () => {

    const loadedTouristsSpot = useLoaderData()
    const { id } = useParams()


    const { spotName, countryName, location, description, seasonality, averageCost, travelTime, totalVisitor, photoUrl } = loadedTouristsSpot


    const handleUpdateTouristsSpot = event => {
        event.preventDefault()
        const form = event.target;

        const spotName = form.spotName.value
        const countryName = form.countryName.value
        const location = form.location.value
        const description = form.description.value
        const travelTime = form.travelTime.value
        const totalVisitor = form.totalVisitor.value
        const photoUrl = form.photoUrl.value

        const averageCost = form.averageCost.value
        const seasonality = form.seasonality.value

        const updateTouristsSpot = { spotName, countryName, location, description, seasonality, averageCost, travelTime, totalVisitor, photoUrl }
        console.log(updateTouristsSpot);

        // send data to the server
        fetch(`https://tour-ease-server.vercel.app/tourists/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: ' update Success!',
                        icon: 'success'
                    })
                }
            })


    }

    return (
        <div className="bg-lime-50 p-20 md:w-3/4 lg:w-1/2 mt-20 rounded-xl mx-auto">

            <h3 className="text-3xl font-extrabold text-center  "> Update Tourist Spot</h3>
            <p>{ }</p>
            <form onSubmit={handleUpdateTouristsSpot} >

                {/* form tourists_spot_name and CountryName row */}
                <div className="  mx-auto gap-6 md:flex">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Tourists Spot Name</label>
                        <input type="text" name="spotName" className="input input-bordered w-full" defaultValue={spotName} required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Country Name </label>
                        <input type="text" name="countryName" className="input input-bordered w-full" defaultValue={countryName} required />

                    </div>
                </div>

                {/* form Average Cost and Seasonality  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Average Cost</label>
                        <input type="text" name="averageCost" className="input input-bordered w-full" defaultValue={averageCost} required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Seasonality</label>
                        <input type="text" name="seasonality" className="input input-bordered w-full" defaultValue={seasonality} required />
                    </div>
                </div>

                {/* form Location and Short description  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" defaultValue={location} required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" className="input input-bordered w-full" defaultValue={description} required />
                    </div>
                </div>




                {/* form Travel Time  and Total Visitor Per Year  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Travel Time</label>
                        <input type="text" name="travelTime" className="input input-bordered w-full" defaultValue={travelTime} required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Total Visitor Per Year</label>
                        <input type="text" name="totalVisitor" className="input input-bordered w-full" defaultValue={totalVisitor} required />
                    </div>
                </div>



                {/* form Photo URL*/}
                <div className=" mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Photo URL</label>
                        <input type="text" name="photoUrl" className="input input-bordered w-full" defaultValue={photoUrl} required />
                    </div>
                </div>

                <input type="submit" value="Update Spot" className="btn btn-outline btn-secondary w-full bg-black mt-4" />
            </form>
        </div>
    );
};

export default UpdateTourists;