import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, collapseAll}) => {

    const handleClick = () => {
        showItems?collapseAll():setShowIndex();
    }

    return (
        <div>
            {/* Accordion Header*/}
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-3 rounded-lg dark:bg-gray-600 dark:text-white">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        {showItems? "❌":"🔽"}
                    </span>
                </div>
                {/* Accordion Body */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;