import React from 'react';


const BannerSection = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='md:ms-52'>
                        <h1 className="text-5xl font-bold">Try Something Special!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Cook Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;