import "../assets/css/card.css";
import hearticon from "../assets/img/hearticon.png";
import heartred from "../assets/img/heartred.png";
import areaIcon from "../assets/img/areaicon.png";
import bedicon from "../assets/img/bedicon.png";
import bathroomicon from "../assets/img/bathroomicon.png";
import rupeeicon from "../assets/img/rupeeicon.png";

function Card(props) {
  const { img, price, name, add, bed, bathroom, area, fav, popular ,id} =
    props.property;

  return (
    <>
      <div className="card">
        <div className="heading">
          <img className="heading-img" src={img} alt="card-img" />
          {popular ? <span>*Popular</span> : null}
        </div>
        <div className="body">
          <img className="rupee" src={rupeeicon} alt="rupee"></img>
          <div className="price">{price}</div>
          <div className="month">/month</div>
          <div>
            <img
              className="fav"
              onClick={props.parentCallback.bind(this,id)}
              src={fav ? heartred : hearticon}
              alt="heart"
            ></img>
          </div>
        </div>
        <div className="name">{name}</div>
        <div className="add">{add}</div>
        <div className="footer">
          <div className="bed2">
            <img className="bed" src={bedicon} alt="bed"></img>
            {bed}
          </div>
          <div className="bathroom2">
            <img className="bathroom" src={bathroomicon} alt="bathroom"></img>
            {bathroom}
          </div>
          <div className="area2">
            <img className="area" src={areaIcon} alt="area"></img>
            {area}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
