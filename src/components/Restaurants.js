import { imageCDNPrefix } from "../config/constants";
export const Restaurants = ({ restaurants }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = restaurants;

  const imgSrc = `${imageCDNPrefix}${cloudinaryImageId}`;
  return (
    <div className="restaurant-card">
      <img src={imgSrc}></img>
      <h1>{name}</h1>
      <h3>{avgRating}</h3>
      <h3>{sla?.deliveryTime}</h3>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};
