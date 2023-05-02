import React from 'react';

const SingleCheif = ({ cheif }) => {

    const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = cheif;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-10">
            <figure><img src={chef_picture} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {chef_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCheif;