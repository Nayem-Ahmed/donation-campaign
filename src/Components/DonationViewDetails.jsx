import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from '../localStorage';

const DonationViewDetails = () => {
    const handleDonation = ()=>{
        saveDonation(parsDDI)
        toast('Your Donation Successful')
    }
    const donationViewDetail = useLoaderData();
    const {donationDetailsId} = useParams();
    const parsDDI = parseInt(donationDetailsId)
    const findDetail = donationViewDetail.find(donation => donation.id == parsDDI);
    const {id,picture, category,description, text_button_color,price} = findDetail;
    return (
<div className="card md:w-96 mx-auto shadow-md bg-base-100 my-11">
<figure><img className='w-full relative' src={picture} /></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end absolute top-72">
      <button onClick={handleDonation} className="btn btn-primary text-white border-none"style={{backgroundColor:text_button_color }}>Donate ${price}</button>
      <ToastContainer />
    </div>
  </div>
</div>
    );
};

export default DonationViewDetails;