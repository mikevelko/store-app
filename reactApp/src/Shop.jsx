import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Shop(props) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.herokuapp.com/products', {
            method: 'GET'
        });
        const items = await data.json();
        console.log(items);
        setItems(items);
        

        
    }


    return (
        <div>
            {props.loggedIn ? 
            items.map(item =>
            (
                <Link to={{
                    pathname: `/shop/${item.id}`,
                    state: { login: props.login }
                  }}>
                    <h3 key={item.id}>{item.title}</h3>
                </Link>
            )) : <h3>You are not logged in</h3> }
        </div>
    );
}

export default Shop;