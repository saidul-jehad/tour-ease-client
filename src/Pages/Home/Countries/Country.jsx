import { Link } from "react-router-dom";

const Country = ({ country }) => {
    return (
        <Link to={`country/${country._id}`}>
            <div className=" rounded-xl">
                <img src={country.image_url} alt="" />

                <h3>{country.country_name}</h3>
            </div>
        </Link>
    );
};

export default Country;