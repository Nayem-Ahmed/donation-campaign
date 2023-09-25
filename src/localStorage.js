const getDonation = () =>{
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
    const storedDonation = getDonation();
    const exist = storedDonation.find(donationDetailsId => donationDetailsId == id);
    if (!exist) {
        storedDonation.push(id);
        localStorage.setItem('donation',JSON.stringify(storedDonation));
        
    }

}
export{saveDonation,getDonation}


  
  