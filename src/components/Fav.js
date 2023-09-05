import { getFavList } from "../Services/Utility";
import Result from "./Result";
import { useState, useEffect } from "react";

function Fav(){
    const [favlist,setFavList]=useState([]);
    
    useEffect(() => {
        setFavList(getFavList)
    }, [])

    if(favlist.length===0) return <center>
        <h1>No Favourite Property</h1>
    </center>;


    return(
        <>
        <h1>Favourite Properties</h1>
        <Result  filteredData={getFavList()}/>
        </>

    )
}

export default Fav