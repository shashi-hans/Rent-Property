import Filter from "./Filter";
import Result from "./Result";
import '../assets/css/home.css';
import { useState } from "react";


function Home() {
  const[filteredData,setFilteredData]=useState([])
  const getFilterData=(childData)=>{
    setFilteredData(childData);
  }
  return (
    <>
      <div className="homeContainer">
      {/* <img src="../assets/img/bed.png" alt="bed"></img> */}
        <Filter parentCallback ={getFilterData}/>
        <Result  filteredData={filteredData}/>
      </div>
    </>
  );
}

export default Home;
