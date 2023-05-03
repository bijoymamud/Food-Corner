import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ViewReceipe = () => {
    const viewItems = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, number_of_recipes, chef_bio, rating } = viewItems;
    // console.log(viewItems);
    const receipies = viewItems.recipes.map(reciepe => reciepe)
    console.log(receipies);

    const items = receipies?.ingredients?.map(iteem => console.log(iteem))
    console.log(items);



    return (
        <div className='container border my-10 p-5 mx-auto bg-base-100 md:grid grid-cols-2 gap-10 justify-center items-center'>
            <div className='w-3/4 text-center mx-auto'>
                <img className='rounded-full h-40 w-240 mx-auto ' src={chef_picture} alt="" />

                <div>
                    <h1 className='font-bold text-xl mt-5  mb-3' >{chef_name}</h1>

                    <div>

                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />

                    </div>
                    <p className='mb-3'>{chef_bio}</p>
                    <p><span className='font-bold'>Experience: </span>{years_of_experience}</p>
                    <p><span className='font-bold'>Recipe: </span>{number_of_recipes}</p>

                </div>

            </div>

            <div className=' md:grid grid-cols-3 mt-10 md:gap-5' >
                {viewItems?.recipes?.map((recipe, index) => (
                    <div className=' mb-3 p-5 bg-cyan-200 rounded-md shadow-xl' key={index}>
                        <h4 ><span className='text-2xl font-bold mt-4'>{recipe?.recipeName}</span></h4>
                        <ul>

                            {recipe?.ingredients?.map((ingredient, index) => (
                                <p key={index}><li>{ingredient}</li></p>

                            ))}

                        </ul>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default ViewReceipe;