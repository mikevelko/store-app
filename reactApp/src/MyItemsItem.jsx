import React, { useState, useEffect } from 'react';

function MyItemsItem(props) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});
    const divStyle= {border: '5px outset red'};
    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.herokuapp.com/products/${props.storeId}`);
        const item = await data.json();
        setItem(item);
    };
    return (
        <div style={divStyle}>
            <h4>title: {item.title}</h4>
            <h4>category: {item.category}</h4>
            <h5>description: {item.description}</h5>
            <h3>price: {item.price} $</h3>
            <h3>IsUnique: {props.isUnique ? 'yes' : 'no'}</h3>
        </div>
    );
}

export default MyItemsItem;