import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationViewDetails = () => {
    const donationViewDetail = useLoaderData();
    const {donationDetailsId} = useParams();
    const findDetail = donationViewDetail.find(donation => donation.id == donationDetailsId);
    console.log(findDetail);
    const {id,picture, category,description, text_button_color,} = findDetail;
    return (
<div className="card md:w-96 mx-auto shadow-md bg-base-100 my-11">
<figure><img className='w-full relative' src={picture} /></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end absolute top-72">
      <button className="btn btn-primary text-white border-none"style={{backgroundColor:text_button_color }}>Donate $290</button>
    </div>
  </div>
</div>
    );
};

export default DonationViewDetails;