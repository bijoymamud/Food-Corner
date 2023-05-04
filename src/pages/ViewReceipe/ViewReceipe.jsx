import React, { useState } from 'react';
import { FaGenderless, FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ViewReceipe = () => {

    const [liked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(0);

    const handleLikeClick = (index) => {
        console.log(index);
        if (liked) {
            setLiked(false);
            setNumLikes(numLikes - 1);
        } else {
            setLiked(true);
            setNumLikes(numLikes + 1);
        }
    };

    const viewItems = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, number_of_recipes, chef_bio, rating } = viewItems;
    // console.log(viewItems);
    const receipies = viewItems.recipes.map(reciepe => reciepe)
    // console.log(receipies);

    // const items = receipies?.ingredients?.map(iteem => console.log(iteem))
    // console.log(items);



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
                        <ul className='mt-3'>

                            {recipe?.ingredients?.map((ingredient, index) => (
                                <li key={index} className=' ms-5 card-actions justify-start items-center'>{""}
                                    <FaGenderless></FaGenderless>{ingredient}

                                </li>

                            ))}

                        </ul>
                        <div className=' ms-96 md:ms-44'>
                            <FaHeart onClick={() => handleLikeClick(index)} className={`${liked ? "text-red-600" : "text-gray-500"}`}></FaHeart>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default ViewReceipe;