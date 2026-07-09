import { CiSearch } from "react-icons/ci";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard.js";
import {useState} from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
    const [showButton, setShowButton] = useState(true);

    // func to update the restaurant list based on the rating
    const filterRestaurantList = () => {
        const filteredRestaurant = restaurantList.filter(
            (res) => res.info.avgRating > 4.3
        );
        setRestaurantList(filteredRestaurant);
        setShowButton(false);
    }

    return (
        <div className="body">
            <div className="search-box">
                <input placeholder="search a restaurant" />
                <CiSearch className="search-icon" />
            </div>

            <div className="filter">
                {
                    // if the showButton is true, then the filter button will be displayed.
                    showButton && (
                        <button className="filter-btn" onClick={filterRestaurantList}>
                            Top Rated Restaurants
                        </button>
                    )
                }
            </div>

            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
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