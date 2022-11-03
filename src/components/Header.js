import '../assets/css/header.css';
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
        <nav>
         Estatery
         <Link to="/">Rent</Link>
         <Link to="/fav">Favorite</Link>
         <a href="ac">Buy</a>
         <a href="ad">Sell</a>
         <select className="option2">
           <option>Manage Property</option>
           <option value="Rent">Rent Property</option>
           <option value="Buy">Buy Property</option>
           <option value="Sell">Sell Property</option>
         </select>
         <select className="option2">
           <option value="Resouces">Resouces</option>
           <option value="Resouces">Resouces</option>
         </select>
         <button id="right">Signup</button>
         <button id="right">Login</button>
       </nav>
      
   
       </>
    )

}
export default Header;