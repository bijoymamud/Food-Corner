import React from 'react';

const SingleCheif = ({ cheif }) => {

    const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = cheif;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-10">
            <img className='w-2/4 rounded-lg' src={chef_picture} />
            <div className="px-12 py-5">
                <h2 className="card-title font-bold  text-2xl mb-12 ">
                    {chef_name}

                </h2>


                <p className=' font-semibold text-xl mb-2'><span className=' text-yellow-600'>Work Experience:</span> <span className='text-slate-500'>{years_of_experience}</span></p>
                <p className='mb-2 font-semibold text-xl'><span className=' text-yellow-600'>Total Recipes:</span> <span className='text-slate-500' >{number_of_recipes}</span></p>
                <p className=' font-semibold text-xl mb-2'><span className=' text-yellow-600' >Accivement:</span> <span className='text-red-600'>{likes}</span></p>
                <div >
                    <button className="btn mt-5 mb-5 p-1 w-full mx-auto">Fashion</button>

                </div>
            </div>
        </div >
    );
};

export default SingleCheif;