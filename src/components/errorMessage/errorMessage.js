import React from 'react';
import './errorMessage.sass';
import img from './error.png';

const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + 'img/error.png'} alt='error'></img> */}
            <img src={img} alt='err'></img>
            <span>шото сломалось</span>
        </>
    )
}
export default ErrorMessage;