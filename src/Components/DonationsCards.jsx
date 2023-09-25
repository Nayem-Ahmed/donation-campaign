import { Link } from "react-router-dom";

const DonationsCards = ({donatio}) => {
    const {id,picture, category, title, card_bg_color, text_button_color,category_color} = donatio;

    return (
        <Link to={`donationDetails/${id}`}>
        <div className="card " style={{ backgroundColor: card_bg_color}}>
            <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <button type="button" className="border p-1 text-sm rounded-sm" style={{ color: text_button_color,backgroundColor:card_bg_color }}>{category}</button>
                </div>
                <h4 className="card-title font-semibold text-sm "style={{ color:category_color}}>{title}</h4>
            </div>
        </div>
        </Link>
    );
};

export default DonationsCards;
