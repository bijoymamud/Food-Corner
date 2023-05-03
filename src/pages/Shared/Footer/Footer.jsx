import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=' bg-black' >
                <div className='grid grid-cols-5 gap-1 md:gap-10 p-2 text-white md:mx-36  mt-36 py-14 '>
                    <div >
                        <h3 className='md:text-2xl font-bold mb-5'>CareerHub</h3>

                        <p><small className='text-zinc-400'>There are many variations of passages  of Lorem Ipsum ,<br /> but the majority have <br /> suffered alteration in some form.</small></p>
                        <div className='md:mt-5'>
                            <img src="../../../public/Icons/Group 9969.png" alt="" />

                        </div>

                    </div>


                    <div>
                        <p className='md:text-lg font-bold mb-5'>Company</p>
                        <div className='text-zinc-400'>
                            <p><small>About Us</small></p>
                            <p><small>Work</small></p>
                            <p><small>Latest News</small></p>
                            <p><small>Careers</small></p>
                        </div>

                    </div>



                    <div>
                        <p className='md:text-lg font-bold mb-5'>Product</p>
                        <div className='text-zinc-400'>
                            <p><small>Prototype</small></p>
                            <p><small>Plans & Pricing</small></p>
                            <p><small>Customers</small></p>
                            <p><small>Integrations</small></p>
                        </div>

                    </div>

                    <div>
                        <p className='md:text-lg font-bold mb-5'>Support</p>
                        <div className='text-zinc-400'>
                            <p><small>Help Desk</small></p>
                            <p><small>Sales</small></p>
                            <p><small>Become a Partner</small></p>
                            <p><small>Developers</small></p>
                        </div>
                    </div>

                    <div>
                        <p className='md:text-lg font-bold mb-5'>Contact</p>
                        <div className='text-zinc-400'>
                            <p><small>524 Broadway , NYC</small></p>
                            <p><small>+1 777 - 978 - 5570</small></p>
                        </div>
                    </div>

                </div>





            </div>

        </div>
    );
};

export default Footer;