import React,{Link} from 'react';
import '../CSS/card.css';
import { useNavigate } from 'react-router-dom'


const Card = (props) => {
  let banquetitem = props.banquetitem;
  const navigate = useNavigate();
  const handleClick= ()=>{
    navigate('/particular');
  }
  return (
    <div className="blanket-hall-card" >
      <img
        src={banquetitem.Image1}
        className="card-image"
      />
      <div className="card-content">
        <h2>{banquetitem.banquet_name}</h2>
        <hr></hr>

        <p>
          {banquetitem.description}
        </p>
        <button className="details-button" onClick={handleClick}>More Details</button> &nbsp; &nbsp;
        <button className="details-button" style={{backgroundColor:"red"}} >Cart</button>
      </div>
    </div>
  );
};

export default Card;
