import React from 'react';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>

            <div className='  card-body grid grid-cols-2 gap-32 items-center mx-80'>
                <div>
                    <h3>Delicious Restaurant</h3>
                    <h3>ABOUT FOOD CORNER</h3>
                    <p>We believe that great food begins with the finest ingredients. That's why we carefully select and source only the freshest and highest-quality ingredients from trusted suppliers. We prioritize sustainability and ethical practices, ensuring that our ingredients are responsibly produced and sourced.</p>
                    <button className='btn btn-wide'>VIEW MORE</button>
                </div>

                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-1/images/about-pizzon.png" alt="" />

            </div>
        </div>
    );
};

export default About;