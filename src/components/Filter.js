import { useRef } from "react";
import "../assets/css/filter.css";
import { getSearchList } from "../Services/Utility";

function Filter(props) {
  const locationRef = useRef(null);
  const priceRef = useRef(null);
  const typeRef = useRef(null);
  const dateRef = useRef(null);

  const searchClick = () => {
    let filteredData = getSearchList(
      locationRef.current.value,
      Number(priceRef.current.value),
      typeRef.current.value,
      dateRef.current.value,
    );
    props.parentCallback(filteredData);
  };

  return (
    <>
      <div id="main">
        <div id="main2">
          <label>Search properties to rent</label>
          <select className="Search1">
            <option value="SearchBar">Search with Search Bar</option>
          </select>
        </div>
        <br />
        <div className="main">
          <div className="filter-grp">
            <label className="label">Location</label>
            <select className="option" id="location" ref={locationRef}>
              <option value="">Select</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div className="filter-grp">
            <label className="label">Move-in Date</label>
            <input type="date" id="date" ref={dateRef}  />
          </div>
          <div className="filter-grp">
          <label className="label">Price</label>
          <select className="option" id="price" ref={priceRef}>
            <option value="">Select</option>
            <option value="20000">Rs15000-Rs20000</option>
            <option value="30000">Rs21000-Rs30000</option>
          </select>
          </div>
          <div className="filter-grp">
          <label className="label">Property Type</label>
          <select className="option" id="type" ref={typeRef}>
            <option value="">Select</option>
            <option value="House">Houses</option>
            <option value="Flat">Flat</option>
          </select>
          </div>
          <button type="button" className="Search2" onClick={searchClick}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
