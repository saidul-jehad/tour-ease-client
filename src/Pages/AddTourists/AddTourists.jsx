
import Swal from "sweetalert2";

const AddTourists = () => {

    const handleAddTourists = event => {
        event.preventDefault()
        const form = event.target;

        const spotName = form.spotName.value
        const countryName = form.countryName.value
        const location = form.location.value
        const description = form.description.value
        const travelTime = form.travelTime.value
        const totalVisitor = form.totalVisitor.value
        const userName = form.userName.value
        const userEmail = form.userEmail.value
        const photoUrl = form.photoUrl.value

        const averageCost = form.averageCost.value
        const seasonality = form.seasonality.value

        const newTourists = { spotName, countryName, location, description, seasonality, averageCost, travelTime, totalVisitor, photoUrl,userEmail, userName }
        console.log(newTourists);

        // send data to the server
        fetch('http://localhost:5000/tourists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourists)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: ' Add Success!',
                        icon: 'success'
                    })
                }
            })


    }


    return (
        <div className="bg-lime-50 p-20 md:w-3/4 lg:w-1/2 mt-20 rounded-xl mx-auto">

            <h3 className="text-3xl font-extrabold text-center  "> Add Tourist Spot</h3>
            <form onSubmit={handleAddTourists} >

                {/* form tourists_spot_name and CountryName row */}
                <div className="  mx-auto gap-6 md:flex">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Tourists Spot Name</label>
                        <input type="text" name="spotName" className="input input-bordered w-full" placeholder="Tourists Spot Name" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Country Name </label>
                        <input type="text" name="countryName" className="input input-bordered w-full" placeholder="Country Name " required />

                    </div>
                </div>

                {/* form Average Cost and Seasonality  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Average Cost</label>
                        <input type="text" name="averageCost" className="input input-bordered w-full" placeholder=" Enter Average Cost" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Seasonality</label>
                        <input type="text" name="seasonality" className="input input-bordered w-full" placeholder="Enter Seasonality" required />
                    </div>
                </div>

                {/* form Location and Short description  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Location" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" className="input input-bordered w-full" placeholder=" Enter Description" required />
                    </div>
                </div>



        
                {/* form Travel Time  and Total Visitor Per Year  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Travel Time</label>
                        <input type="text" name="travelTime" className="input input-bordered w-full" placeholder="Enter Travel Time" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Total Visitor Per Year</label>
                        <input type="text" name="totalVisitor" className="input input-bordered w-full" placeholder=" Enter Total Visitor Per Year" required />
                    </div>
                </div>

                {/* form User Name  and User Email  row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">User Name</label>
                        <input type="text" name="userName" className="input input-bordered w-full" placeholder="Enter User Name  " required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">User Email</label>
                        <input type="text" name="userEmail" className="input input-bordered w-full" placeholder="Enter User Email" required />
                    </div>
                </div>





                {/* form Photo URL*/}
                <div className=" mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Photo URL</label>
                        <input type="text" name="photoUrl" className="input input-bordered w-full" placeholder="Enter photoURL" />
                    </div>
                </div>

                <input type="submit" value="Add Spot" className="btn btn-outline btn-secondary w-full bg-black mt-4" />
            </form>
        </div>
    );
};

export default AddTourists;