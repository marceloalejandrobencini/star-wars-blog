import React from "react";
import { useStore } from "../store/Context";

const Card = ({ item, type }) => {
    const { store, actions } = useStore();

    const handleFavorite = () => {
        actions.addFavorite(item);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button onClick={handleFavorite} className="btn btn-primary">Favorite</button>
            </div>
        </div>
    );
};

export default Card;
