import Card from "./Card";
import "../assets/css/result.css";
import { useEffect, useState } from "react";
import { favPropertyMap, setFav } from "../Services/Utility";

function Result(props) {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setFilteredData(props.filteredData)
    }, [props.filteredData])

  const getCardList = () => {
    const cardList = [];
    filteredData.forEach((item, index) => {
      cardList.push(
        <Card key={index} property={item} parentCallback={favHandler} />
      );
    });
    return cardList;
  };
  const favHandler = (id) => {  
    const list = filteredData.slice()
    list.forEach((item) => {
      if (item.id === id) {
        item.fav = !item.fav;
      }
    });
    setFilteredData(list);
    setFav(id)
    console.log(
      favPropertyMap
    )
  };

  return (
    <>
      <div className="result">{getCardList()}</div>
    </>
  );
}

export default Result;
