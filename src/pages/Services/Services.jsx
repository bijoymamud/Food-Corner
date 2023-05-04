import React from 'react';
import { FaDrum, FaHeartbeat, FaSun, FaThumbsUp } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='text-center container mx-auto
        '>
            <h3 className='text-2xl font-semibold mb-2'>Our <span className='font-bold'>Special</span> Service</h3>
            <p>The food business has always been booming. Restaurants, cafeterias, and <br /> fast food shops require to make people aware of their specialties in the most attractive ways. </p>

            <div className='md:grid grid-cols-4 text-center mt-28 '>
                <div>
                    <FaSun className=' text-2xl text-red-600 mx-auto mb-4'></FaSun>
                    <h2 className='font-bold mb-2'>Healthy Recipe</h2>
                    <p>The choice of food is as delicate as the place of eateries.</p>

                </div>
                <div>
                    <FaDrum className='text-2xl text-red-600 mx-auto mb-4'></FaDrum>
                    <h2 className='font-bold mb-2'>Healthy Meals</h2>
                    <p>The choice of food is as delicate as the place of eateries.</p>

                </div>
                <div>
                    <FaThumbsUp className='text-2xl text-red-600 mx-auto mb-4'></FaThumbsUp>
                    <h2 className='font-bold mb-2'>Healthy Eating</h2>
                    <p>The choice of food is as delicate as the place of eateries.</p>

                </div>
                <div>
                    <FaHeartbeat className='text-red-600  text-2xl mx-auto mb-4'></FaHeartbeat>
                    <h2 className='font-bold mb-2'>Healthy Lifes</h2>
                    <p>The choice of food is as delicate as the place of eateries.</p>

                </div>
            </div>
        </div>
    );
};

export default Services;