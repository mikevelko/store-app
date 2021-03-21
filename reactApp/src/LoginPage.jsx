import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/users',
})

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    

    CreateUser = async () => {
        const params = {
            username: this.state.value,
        };
        try {
            const response = axiosInstance.post('',  params );
            const data = await response;
            console.log(data);
        }
        catch
        {
            console.log("Error");
        }
    }

    handleInputChange = event => {
        this.CreateUser();
        this.props.ChangeLogin(this.state.value);
        this.props.ChangeLoggedIn();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div style={{ height: "200px", position: "relative", top: "50%" }}>
                <div style={{ margin: 5, position: "absolute", top: "50%", left: "40%" }}>
                    <h3>Please provide your login</h3>
                    <input value={this.state.value} onChange={this.handleChange}></input>
                    <Link to='shop'>
                        {(this.state.value==='') ? <button disabled="true">Login</button> : <button onClick={this.handleInputChange}>Login</button>}
                    </Link>
                </div>
            </div>
        );
    }
}


export default LoginPage;