import React, { useEffect, useState } from 'react';
import SingleCheif from '../../pages/singleCheif/SingleCheif';
import NewRecipes from '../newrecipes/NewRecipes';

const OurCheif = () => {

    const [cheifs, setSheifs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allCheifs')
            .then(res => res.json())
            .then(data => setSheifs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>Cheifs Introduction</h2>

            <div className=' mx-auto md:grid grid-cols-2 gap-10 container md:mb-64 mt-10 md:container'>
                {
                    cheifs.map(cheif => <SingleCheif

                        key={cheif.id}
                        cheif={cheif}

                    ></SingleCheif>)
                }
            </div>
            <NewRecipes></NewRecipes>
        </div>
    );
};

export default OurCheif;