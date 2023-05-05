import React from 'react';
import { MdPermPhoneMsg } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const FeedBack = () => {


    const clickForBooking = () => {
        toast.success('Booking Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (

        <div className='mt-24'>

            <div className='flex justify-around items-start container mx-auto '>

                <div className='w-2/4'>
                    <h3 className='text-2xl font-semibold  text-orange-400 mb-2'>Fresh from pizzon</h3>
                    <h1 className='text-5xl font-bold mb-5'>BOOK ONLINE</h1>
                    <p>Fugit,
                        optio quas aliquid illo totam iusto laborum repellendus rerum <br /> explicabo.  Similique corporis repudiandae velit sapiente sunt sequi, <br /> accusantium fugiat eveniet corrupti.  Veritatis ipsa molestiae <br />quae voluptates assumenda soluta, error quas doloremque incidunt.</p>
                    <div className='  mt-5 w-2/4 bg-orange-500 hover:bg-green-500 p-2  rounded' >
                        <div className='flex items-center  gap-5 bg-black p-3  rounded w-full '>
                            <MdPermPhoneMsg className='text-2xl mt-2 ms-14 text-center text-white '></MdPermPhoneMsg><h2 className='text-2xl text-white font-bold'>+8801445304257</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-4xl text-center mb-5 font-bold'>BOOK A TABLE</h3>

                    <div className=''>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered input-primary w-96 mb-5" required /> <br />

                        <input type="email" name='email' placeholder="foodcorner@gmial.com" className="input input-bordered input-primary w-96 mb-5" required /><br />



                        <input type="date" placeholder="Date" className="input input-bordered input-primary w-96 " required /> <br />

                        <button onClick={clickForBooking} className="btn mt-5 w-full hover:bg-white hover:text-black">Book Now</button>

                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default FeedBack;