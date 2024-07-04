import React, { useState, useEffect } from "react";
import { useStore } from "../store/Context";

const Card = ({ item, type }) => {
    const { store, actions } = useStore();
    const [expanded, setExpanded] = useState(false);
    const [details, setDetails] = useState(null);

    const handleFavorite = () => {
        actions.addFavorite(item);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
        if (!expanded && !details) {
            fetch(`https://www.swapi.tech/api/${type}/${item.uid}`)
                .then(res => res.json())
                .then(data => setDetails(data.result.properties))
                .catch(err => console.error(err));
        }
    };

    return (
        <div className="card mb-4" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button onClick={handleFavorite} className="btn btn-primary">Favorite</button>
                <button onClick={toggleExpand} className="btn btn-secondary ml-2">
                    {expanded ? "Hide Details" : "View Details"}
                </button>
                {expanded && details && (
                    <div className="mt-3">
                        <ul>
                            {Object.keys(details).map((key, index) => (
                                <li key={index}><strong>{key}:</strong> {details[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
