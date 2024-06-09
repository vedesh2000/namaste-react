import {CDN_URL} from "../utils/constants"

const ItemList = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 flex justify-between">
                        <div className="w-9/12">
                            <div>
                                <div className="font-semibold py-2">
                                    {item.card.info.name}
                                </div>
                                <div>
                                ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
                                </div>
                                
                            </div>
                            <p className="text-sm">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12">
                            <img src={CDN_URL + item?.card?.info?.imageId}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
