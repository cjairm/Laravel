import React, { Fragment, useContext } from "react";

import PetsContext from "../context/Pets/main";

const PetCards = () => {
    const data = useContext(PetsContext)[0];
    return (
        <Fragment>
            {data.pets.map(pet => {
                return (
                    <div key={pet.id} className="col-12 col-md-4 col-lg-3 mb-3">
                        <PetCard
                            name={pet.name}
                            description={`${pet.name} is a ${pet.breed}`}
                            to={`/pet/${pet.id}`}
                        />
                    </div>
                );
            })}
        </Fragment>
    );
};

/* 
    name: string;
    description: string;
    to: string (URL);
*/

const PetCard = ({ name, description, to }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={to} className="btn btn-primary">
                    See profile
                </a>
            </div>
        </div>
    );
};

export default PetCards;
