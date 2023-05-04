import React from 'react';
import { FaDrum, FaHeartbeat, FaSun, FaThumbsUp } from 'react-icons/fa';
import Sponsors from '../Sponsors/Sponsors';

const Services = () => {
    return (
        <div>
            <div className='text-center container mx-auto
        '>
                <h3 className='text-5xl font-semibold mb-5 '>Our <span className='font-bold'>Special</span> Service</h3>
                <p>The food business has always been booming. Restaurants, cafeterias, and <br /> fast food shops require to make people aware of their specialties in the most attractive ways. </p>

                <div className='md:grid grid-cols-4 text-center mt-28 '>
                    <div className='mb-10'>
                        <FaSun className=' text-4xl text-red-600 mx-auto mb-4'></FaSun>
                        <h2 className='font-bold mb-2 text-2xl'>Healthy Recipe</h2>
                        <p>The choice of food is as delicate as the place of eateries.</p>

                    </div>
                    <div className='mb-10'>
                        <FaDrum className='text-4xl  text-red-600 mx-auto mb-4'></FaDrum>
                        <h2 className='font-bold mb-2 text-2xl'>Healthy Meals</h2>
                        <p>The choice of food is as delicate as the place of eateries.</p>

                    </div>
                    <div className='mb-10'>
                        <FaThumbsUp className='text-4xl  text-red-600 mx-auto mb-4'></FaThumbsUp>
                        <h2 className='font-bold mb-2 text-2xl'>Healthy Eating</h2>
                        <p>The choice of food is as delicate as the place of eateries.</p>

                    </div>
                    <div className='mb-10'>
                        <FaHeartbeat className='text-red-600  text-4xl  mx-auto mb-4'></FaHeartbeat>
                        <h2 className='font-bold text-2xl mb-2'>Healthy Lifes</h2>
                        <p>The choice of food is as delicate as the place of eateries.</p>

                    </div>
                </div>
            </div>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Services;