import { cardData } from "./DummyData";

export const getSearchList = (
  selectedLocation,
  selectedPrice,
  selectedType
) => {
	let filterList = selectedLocation
		? cardData.filter((item) => item.location === selectedLocation)
		: cardData;
	filterList = selectedPrice
		? filterList.filter((item) => item.price === selectedPrice)
		: filterList;
	filterList = selectedType
		? filterList.filter((item) => item.type === selectedType)
		: filterList;
	return filterList;
};

export const favPropertyMap = {}
export function setFav(id) {
	if(favPropertyMap[id]) {
		delete favPropertyMap[id]
	} else {
		favPropertyMap[id] = true
	}
}
export function getFavList() {
	
	return cardData.filter((item)=>{
		if (favPropertyMap[item.id])
		return true
	})
}