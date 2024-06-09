import {CDN_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
      <div className="m-4 p-4 w-[250px] h-[500px] text-wrap overflow-clip bg-gray-100 rounded-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600">
        <img
          className="h-[250px] w-[250px] rounded-lg m-10px"
          alt="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        ></img>
        <div className="flex items-center h-[20px] my-5">
          <h3 className="font-bold py-2 text-lg overflow-hidden text-ellipsis whitespace-nowrap flex-1">{name}</h3>
          <div className="flex items-center ml-2">
              <dt className="text-amber-400">
                  <span className="sr-only">Star rating</span>
                  <svg width="16" height="20" fill="currentColor">
                      <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
              </dt>
              <dd className="ml-1">{avgRating}</dd>
              </div>
          </div>

        <h4 className="overflow-hidden text-ellipsis whitespace-nowrap py-3">{cuisines.join(", ")}</h4>
        <h4 className="py-3">
          <span className="font-bold">
              Offer: 
          </span>
          {" " + costForTwo}
        </h4>
        <h4 className="py-3">
          <span className="font-bold">
              Delivery In: 
          </span>
          {" " + sla.deliveryTime} minutes
        </h4>
      </div>
    );
  };

// Higher Order component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)  => {
  return (props) => {
    return(
      <div>
        <label className="m-2 p-2 rounded-lg font-bold absolute bg-black text-white dark:bg-white dark:text-black">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    );
  }
};

export default RestaurantCard;