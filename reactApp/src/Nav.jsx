import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/users',
})

function Nav(props) {

    const NavStyle = {color:'white'};

    const [money,setMoney] = useState(0);
    const [username, setUsername] = useState('');

    const Getusers = async() => 
        {
            try {
                console.log(props.login);
                const userData = axiosInstance.get(`/${props.login}`);
                const users = await userData;
                console.log(users.data);
                setMoney(users.data.money);
                setUsername(users.data.username);
                //if(props.userData!==users.data) props.PasteUserData(users.data);
            }
            catch 
            {
                console.log("Error");
            }
        }
        
    Getusers();


    return (
        <nav>
            <h3>Hello, {username}</h3>
            <h3>money: {money} $</h3>
            <ul className="nav-links">
                <Link style={NavStyle} to="/shop">
                    <li>
                        Shop
                    </li>
                </Link>
                {props.login !== '' ? <Link style={NavStyle} to="/myitems">
                    <li>
                        My items
                    </li>
                </Link> : ""}
                
            </ul>
        </nav>
    );
}

export default Nav;