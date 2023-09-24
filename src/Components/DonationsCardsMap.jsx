import React from 'react';
import DonationsCards from './DonationsCards';
import { useLoaderData } from 'react-router-dom';
const DonationsCardsMap = () => {
    const donations = useLoaderData();
    return (
        <div>
               <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-5'>
            {
                donations.map(donation=> <DonationsCards key={donation.id} donatio={donation}></DonationsCards>)
            }
           </div>
            
        </div>
    );
};

export default DonationsCardsMap;