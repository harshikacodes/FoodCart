import { CiSearch } from "react-icons/ci";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
    return (
        <div className="body">
            <div className="search-box">
                <input placeholder="search" />
                <CiSearch className="search-icon" />
            </div>

            <div className="restaurant-container">
                {resList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurantData={restaurant} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;