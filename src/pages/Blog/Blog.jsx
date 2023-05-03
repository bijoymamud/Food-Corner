import React from 'react';
import Header from '../Shared/Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div >
                <div className='bg-slate-50 mt-14 md:mt-24 p-4 md:p-10 md:mx-36 '>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'>When should we use Context API ?</h3>
                        <p className='text-gray-600'>The Context API in React is a powerful tool that allows to manage state that needs to be shared between components in a hierarchical manner. It is particularly useful when have data or state that needs to be accessed by many components at different levels of the component tree, or when have a complex component hierarchy where passing props through every level of the tree becomes tedious and error-prone.

                            Using the Context API can help avoid the problem of prop drilling, which can occur when  have data or state that needs to be updated by multiple components, but passing the props down through each level of the component tree becomes unwieldy. Instead, can use the Context API to make the data or state available to all components that need it, without having to pass it down manually.

                            Additionally, the Context API can be useful when have data or state that needs to be accessed or updated by components that are not necessarily siblings. In such cases, using the Context API can simplify code and make it easier to manage the state.

                            In summary, the Context API is a powerful tool that can help manage state in complex React applications. It is especially useful when have data or state that needs to be shared between components in a hierarchical manner, or when passing props down through each level of the component tree becomes tedious or error-prone.</p>
                    </div>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'>What is custom Hook ?</h3>
                        <p className='text-gray-600'>Custom hooks allow to encapsulate and abstract away the implementation details of stateful logic, making code more modular and reusable. They also make it easier to share stateful logic between different components or even different projects.

                            To create a custom hook, simply define a JavaScript function that uses React hooks, just like would define a regular React component. The only difference is that instead of rendering JSX, the custom hook returns any data or functions that the consuming component needs to use.</p>
                    </div>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'> What is useRef and useMemo ?</h3>
                        <p className='text-gray-600'>useRef and useMemo are both React hooks that can be used to optimize the performance of your application.

                            useRef is a hook that returns a mutable ref object whose .current property can be set to any value. The primary use case for useRef is to access and manipulate the DOM or to store a value that persists across renders without triggering a re-render. For example, we can use useRef to access the value of an input field, or to store a value that needs to persist across renders, but doesn't affect the UI.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;