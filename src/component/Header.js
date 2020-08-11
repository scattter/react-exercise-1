import React, { Component } from 'react';
import imgAvatar from '../assets/avatar.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header" style={{ textAlign: 'center', fontSize: 16 }}>
                <img src={imgAvatar} alt='Avatar'></img>
                <p>HELLO,</p>
                <br></br>
                <p>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</p>
            </div>
        );
    }
}

export default Header;