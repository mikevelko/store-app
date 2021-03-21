import React, { useEffect, useState } from 'react';

import * as axios from 'axios';
import MyItemsItem from './MyItemsItem';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/users',
})


function MyItems(props) {

    useEffect(() => {
        Getusers();
    }, []);

    const [items, setItems] = useState([]);

    const Getusers = async () => {
        try {
            const userData = axiosInstance.get(`/${props.login}`);
            const users = await userData;

            console.log(users.data.items);

            setItems(users.data.items);
            console.log(users.data.items);

        }
        catch
        {
            console.log("Error");
        }
    }


    return (
        <div>
                {items.map(item =>
                (
                    <h3 key={item.storeId}><MyItemsItem storeId={item.storeId} isUnique={item.isUnique}/></h3>
                )
                )}
        </div>
    );
}


export default MyItems;