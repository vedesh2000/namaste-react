import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - RestaurantContainer
 * - - RestaurantCard
 * - - - Image
 * - - - Name of the restaurant
 * - - - Star rating
 * - - - Cusines
 * - - - Time for delivery
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=360&t=st=1697882039~exp=1697882639~hmac=fcf364dbf9ea0f8cf717dbdd371f46accb6669ace7cb969e4388324794e2ee0e"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "275394",
      name: "Devi Homely Kitchen",
      cloudinaryImageId: "l5ufrtb7ndy9r3e9yuu1",
      locality: "Bendeapudi Vari Street",
      areaName: "Powerpet",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "275394",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "71655",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "13 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/devi-homely-kitchen-bendeapudi-vari-street-powerpet-eluru-275394",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "142062",
      name: " Hai Food Park",
      cloudinaryImageId: "btmywa5djyo1pyxo3p2r",
      locality: "NR Pet",
      areaName: "Powerpet",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "142062",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "92608",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 11,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "11 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/-hai-food-park-nr-pet-powerpet-eluru-142062",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "380119",
      name: "Yaa Razzaq Star Biryani Point",
      cloudinaryImageId: "e4piirbl049mvb67t7or",
      locality: "Lic Office Road",
      areaName: "Powerpet",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Indian"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "380119",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "227220",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "12 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/yaa-razzaq-star-biryani-point-lic-office-road-powerpet-eluru-380119",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "143411",
      name: "Gummadi Grand",
      cloudinaryImageId: "vakzgsmduphfeqjqbd2l",
      locality: "Fire Station Center",
      areaName: "Powerpet",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Biryani"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "143411",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "91504",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gummadi-grand-fire-station-center-powerpet-eluru-143411",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "240532",
      name: "Madina Biryani Point",
      cloudinaryImageId: "hruiiqprwtgba95au89z",
      locality: "RR Pet",
      areaName: "Powerpet",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "240532",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "128733",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/madina-biryani-point-rr-pet-powerpet-eluru-240532",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "262493",
      name: "Ambica Flavours",
      cloudinaryImageId: "plysbhlc2qsmhizmfxno",
      locality: "NR Pet",
      areaName: "Powerpet",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "262493",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "31254",
      avgRatingString: "3.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ambica-flavours-nr-pet-powerpet-eluru-262493",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "578982",
      name: "Anish Elite Exotic Restaurant",
      cloudinaryImageId: "gjymefv4i1lhxq4ahfrk",
      locality: "Narasimha Rao Pet",
      areaName: "West Godavari",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "North Indian",
        "Snacks",
        "Biryani",
        "South Indian",
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "578982",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "346711",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 23:18:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/anish-elite-exotic-restaurant-narasimha-rao-pet-west-godavari-eluru-578982",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "365765",
      name: "Raza Star Biryani",
      cloudinaryImageId: "mmv6boh3r1mixnymuawh",
      locality: "Cmr Shopping Mall",
      areaName: "Powerpet",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "South Indian", "North Indian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "365765",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "167901",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/raza-star-biryani-cmr-shopping-mall-powerpet-eluru-365765",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "143461",
      name: "Navayuga Family Restaurant",
      cloudinaryImageId: "r1n1tkxa8vxosljqdvla",
      locality: "N R Pet",
      areaName: "Powerpet",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "South Indian"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "143461",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "144777",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-22 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-9874f7fb-10d4-4a25-bd37-31d38391db76",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/navayuga-family-restaurant-n-r-pet-powerpet-eluru-143461",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = ({resData}) => {
  const {name, cuisines, avgRating, costForTwo, sla} = resData?.info
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
        </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
