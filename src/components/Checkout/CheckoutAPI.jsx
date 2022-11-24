import { useEffect, useState } from 'react';
import { API } from "../../Global";
import CheckoutTable from './CheckoutTable';


const Getmember = () => {

    // Hooks to handle checkoutData from API
    const [checkoutData, setCheckoutData] = useState([]);

    // function to fetch data from API
    const getBooks = () => {
        fetch(`${API}/members`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => setCheckoutData(data))
    }

    useEffect(() => getBooks(), []);

    return (
        <div >
            <CheckoutTable checkoutData={checkoutData} />
        </div>
    )
};

export default Getmember;