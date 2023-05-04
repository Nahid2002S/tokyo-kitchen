import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-16 px-2 mt-4'>
            <h3 className='mb-4 mt-6 text-center text-3xl font-semibold text-indigo-500'>Blogs</h3> <hr />
            <div className='bg-gradient-to-r from-pink-600 to-indigo-700 mb-2 rounded-md p-8 mt-6'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>Tell us the differences between uncontrolled and controlled components?</h3>
                <p className='font-bold text-sky-400'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='bg-gradient-to-r from-pink-600 to-indigo-700 mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>How to validate React props using PropTypes?</h3>
                <p className='font-bold text-sky-400'>App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps. There are many props validator in ReactJS.</p>
            </div>
            <div className='bg-gradient-to-r from-pink-600 to-indigo-700 mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>Tell us the difference between nodejs and express js?</h3>
                <p className='font-bold text-sky-400'>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='bg-gradient-to-r from-pink-600 to-indigo-700 mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>What is a custom hook, and why will you create a custom hook?</h3>
                <p className='font-bold text-sky-400'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
            </div>
        </div>
    );
};

export default Blogs;