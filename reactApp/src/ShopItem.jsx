import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/',
})



function ShopItem(props) {
    useEffect(() => {
        setLogin(props.location.state.login);
        fetchItem();
        console.log(item);
    }, []);

    const [item, setItem] = useState({});
    const [login, setLogin] = useState('');
    const [unique, setUnique] = useState(false);

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.herokuapp.com/products/${props.match.params.id}`);
        const item = await data.json();
        setItem(item);

        const IsUniqueBought = async () => {
            try {
                console.log(props.match.params.id);
                const response = axiosInstance.get('items/isUnique', { params: { storeId: props.match.params.id } });
                const data = await response;
                console.log(data.data);
                setUnique(data.data);
            }
            catch
            {
                console.log("Error");
            }
        }
        IsUniqueBought();
    };

    const paramsBuy = {
        username: login,
        items: [
            {
                storeId: props.match.params.id,
                isUnique: false,
                price: item.price
            }
        ]
    };

    const Buy = async () => {
        try {
            const response = axiosInstance.post('users/additem',  paramsBuy );
            const data = await response;
            console.log(data);
            setUnique(false);
            //props.location.state.setBoughtSomething(true);
        }
        catch
        {
            console.log("Error");
        }
    }

    const paramsBuyUnique = {
        username: login,
        items: [
            {
                storeId: props.match.params.id,
                isUnique: true,
                price: item.price
            }
        ]
    };

    const BuyUnique = async () => {
        try {
            const response = axiosInstance.post('users/additem',  paramsBuyUnique );
            const data = await response;
            console.log(data);
            setUnique(true);
        }
        catch
        {
            console.log("Error");
        }
    }

    return (
        <div>
            <h4>title: {item.title}</h4>
            <h4>category: {item.category}</h4>
            <h5>description: {item.description}</h5>
            <h3>price: {item.price} $</h3>
            <button disabled={unique} onClick={Buy}>buy</button>
            <button disabled={unique} onClick={BuyUnique}>buy unique so noone else can buy it anymore</button>
        </div>
    );
}

export default ShopItem;