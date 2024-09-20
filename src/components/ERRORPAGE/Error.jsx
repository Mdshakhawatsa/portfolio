import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <Link className='  ' to="/">GO BACK TO HOME</Link>
        </div>
    );
};

export default Error;