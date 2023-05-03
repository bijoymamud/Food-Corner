import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewReceipe = () => {
    const viewItems = useLoaderData();
    // const { chef_picture } = viewItems;
    // console.log(viewItems);
    const receipies = viewItems.recipes.map(reciepe => reciepe)
    console.log(receipies);

    const items = receipies?.ingredients?.map(iteem => console.log(iteem))
    console.log(items);



    return (
        <div>

            <div className='mx-auto '>
                <img className='mx-auto mb-5' src={viewItems?.chef_picture} alt={viewItems?.chef_name} />
                <div className=" mx-auto ">
                    <table className="table w-1/2">
                        {/* head */}

                        <tbody className='container mx-auto' >
                            <tr >
                                {/* row 1 */}


                                {viewItems?.recipes?.map((recipe, index) => (
                                    <td key={index}>
                                        <h4><span className='text-2xl font-bold mt-4'>{recipe?.recipeName}</span></h4>
                                        <ul>
                                            {recipe?.ingredients?.map((ingredient, index) => (
                                                <li key={index}>{ingredient}</li>
                                            ))}
                                        </ul>
                                    </td>
                                ))}
                            </tr>





                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default ViewReceipe;