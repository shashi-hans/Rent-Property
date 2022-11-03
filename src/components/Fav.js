import { getFavList } from "../Services/Utility";
import Result from "./Result";
import { useState, useEffect } from "react";

function Fav(){
    const [favlist,setFavList]=useState([]);
    
    useEffect(() => {
        setFavList(getFavList)
    }, [])

    if(favlist.length===0) return <center>
        <h1>No Favorite Property</h1>
    </center>;


    return(
        <>
        <h1>Favroute Properties</h1>
        <Result  filteredData={getFavList()}/>
        </>

    )
}

export default Fav