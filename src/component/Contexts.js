import React, { Component } from 'react';
import Context from './Context';

class Contexts extends Component {
    render() {
        return <div className="contexts" style={{ marginTop: '15px' }}>
            <h3 style={{ marginLeft: '30px' }}>EDUCATION</h3>
            <Context year='1990' text='I was born in' detail='Lorem...' />
            <Context year='2005' text='SecondDary school specializing in artistic' detail='Eos...' />
            <Context year='2009' text='I was born in' detail='Aspernatur...' />
            <Context year='2012' text='I was born in' detail='Ducimus...' />
        </div >;
    }
}

export default Contexts;