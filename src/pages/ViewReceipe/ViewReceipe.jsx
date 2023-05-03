import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewReceipe = () => {
    const viewItems = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, number_of_recipes, chef_bio } = viewItems;
    // console.log(viewItems);
    const receipies = viewItems.recipes.map(reciepe => reciepe)
    console.log(receipies);

    const items = receipies?.ingredients?.map(iteem => console.log(iteem))
    console.log(items);



    return (
        <div className='container border my-10 p-5 mx-auto grid '>
            <div>
                <img className='rounded-full h-14 w-14  ' src={chef_picture} alt="" />
                <div>
                    <h1>{chef_name}</h1>
                    <p>Bio:{chef_bio}</p>
                    <p>{years_of_experience}</p>
                    <p>{number_of_recipes}</p>

                </div>

            </div>

            <div className=' md:grid grid-cols-3 mt-5 gap-5' >
                {viewItems?.recipes?.map((recipe, index) => (
                    <div className='bg-green-500' key={index}>
                        <h4 ><span className='text-2xl font-bold mt-4'>{recipe?.recipeName}</span></h4>
                        <ul>
                            {recipe?.ingredients?.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default ViewReceipe;