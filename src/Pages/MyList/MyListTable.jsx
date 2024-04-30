import { GrLocation } from "react-icons/gr";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTable = ({ touristsSpot, setTouristsSpots, touristsSpots }) => {

    const { _id, spotName, countryName, location, photoUrl } = touristsSpot


    const handleDelete = _id => {
        console.log(_id);


        // 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://tour-ease-server.vercel.app/tourists/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your TouristsSpot has been deleted.",
                                icon: "success"
                            })

                            const remaining = touristsSpots.filter(tou => tou._id !== _id)
                            setTouristsSpots(remaining)
                        }
                    })
                console.log('delete confirm');
            }
        });


    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Spot Name</th>
                            <th>Address</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{spotName}</div>
                                        <div className="text-sm opacity-50">{countryName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">
                                    <div className="flex gap-3 items-center  "><GrLocation></GrLocation>
                                        <p>{location}</p>
                                    </div></span>
                            </td>
                            <td><Link to={`update/${_id}`}><button className="btn btn-accent">U</button></Link></td>
                            <th>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn btn-error">X</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

MyListTable.propTypes = {
    touristsSpot: PropTypes.object,
    touristsSpots: PropTypes.array,
    setTouristsSpots: PropTypes.func
}

export default MyListTable;