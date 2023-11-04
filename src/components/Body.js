import { Restaurants } from "./Restaurants";
import { restaurantsList } from "../config/constants";
import { useState } from "react";
function search(val) {
  console.log(" --------");
  console.log("val:", val);
  console.log(" --------");
}
export const Body = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app-body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          placeholder="Enter your text"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button type="button" onClick={() => search(searchText)}>
          search
        </button>
      </div>
      <div className="res-container">
        {restaurantsList.map((res) => {
          return <Restaurants key={res?.info?.id} restaurants={res.info} />;
        })}
      </div>
    </div>
  );
};
