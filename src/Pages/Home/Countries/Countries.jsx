import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://tour-ease-server.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
    }, [])

    return (    
        <div className="my-14">
            <h3 className="text-center text-2xl font-semibold mb-6">Countries</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11">
                {
                    countries.map(country => <Country
                        key={country._id}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;