
const AllDonation = ({donation}) => {
    const {id,picture, category,description,category_color, title,text_button_color,price,card_bg_color} = donation;
    return (
         <div className="card card-side bg-base-100 shadow-xl " style={{ backgroundColor:  card_bg_color}}>
        <figure><img src={picture} alt="Movie"/></figure>
        <div className="card-body">
        <div className="card-actions">
       <button type="button" className="border p-1 text-sm rounded-sm" style={{ color: text_button_color,backgroundColor:card_bg_color }}>{category}</button>
      </div>
        <h4 className="card-title font-semibold text-sm "style={{ color:category_color}}>  {title}</h4>
       <p style={{ color:category_color}}>${price}</p>
       <div className="card-actions justify-end absolute top-36">
      <button className="btn btn-primary text-white border-none md:btn-md btn-sm"style={{backgroundColor:text_button_color }}>Donate ${price}</button>
    </div>     
  </div>
</div>
    );
};

export default AllDonation;