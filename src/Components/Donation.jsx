import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonation } from '../localStorage';

const Donation = () => {
    const donaT = useLoaderData();
    const[donaTion,setDonation] = useState([]);
    useEffect(()=>{
        const storeDonate = getDonation();
        if (donaT.length) {
            const don = donaT.filter(donation => storeDonate.includes(donation.id));
            setDonation(don);
        }
    },[])
    return (
        <div>
            <h2>{donaTion.length}</h2>
        </div>
    );
};

export default Donation;
