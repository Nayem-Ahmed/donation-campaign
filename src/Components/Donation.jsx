import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonation } from '../localStorage';
import AllDonation from './AllDonation';

const Donation = () => {
    const donaT = useLoaderData();
    const[donaTion,setDonation] = useState([]);
    const [dataLength,SetDataLength] =useState(4);
    useEffect(()=>{
        const storeDonate = getDonation();
        if (donaT.length) {
            const don = donaT.filter(donation => storeDonate.includes(donation.id));
            setDonation(don);
        }
    },[])
    return (
        <div >
           <div className='grid md:grid-cols-2 gap-5 mt-5'>
           {
                donaTion.slice(0,dataLength).map(donation => <AllDonation key={donation.id} donation={donation}></AllDonation>)
            }
           </div>

          <div className='text-center py-6'>
          <button onClick={()=>SetDataLength(dataLength.length)} className="btn btn-success text-center text-white">See All</button>
          </div>
            
        </div>
    );
};

export default Donation;
