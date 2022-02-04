import React from 'react';

export default function Copyright() {
    return (
        <p className='text-center'>
            Copyright ©
            <a href='https://skillark.org/'> Skillark </a>
            {new Date().getFullYear()}.
        </p>
    );
}

