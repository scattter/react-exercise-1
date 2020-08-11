import React from 'react';

const Context = (props) => {
    return <div className='context'>
        < p className='year'> {props.year}</p >
        <div className='more'>
            <p className='text'>{props.text}</p>
            <p className='detail'>{props.detail}</p>
        </div>
    </div>
}

export default Context;