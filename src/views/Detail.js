import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { type, id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.result.properties))
            .catch(err => console.error(err));
    }, [type, id]);

    if (!detail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>{detail.name}</h1>
            <ul>
                {Object.keys(detail).map((key, index) => (
                    <li key={index}><strong>{key}:</strong> {detail[key]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Detail;
