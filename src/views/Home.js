import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data => setPeople(data.results))
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(data => setPlanets(data.results))
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data => setVehicles(data.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <h1>People</h1>
            <div className="row">
                {people.map(person => (
                    <div key={person.uid} className="col-md-4">
                        <Card item={person} type="characters" />
                    </div>
                ))}
            </div>
            <h1>Planets</h1>
            <div className="row">
                {planets.map(planet => (
                    <div key={planet.uid} className="col-md-4">
                        <Card item={planet} type="planets" />
                    </div>
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div key={vehicle.uid} className="col-md-4">
                        <Card item={vehicle} type="vehicles" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
