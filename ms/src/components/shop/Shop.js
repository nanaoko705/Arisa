import React from "react";

const Shop = ({ name, position }) => (
    <div className="col-lg-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src={`assets/img/team/${name}.jpg`} alt="..." />
        <h4>{name}</h4>
        <p className="text-muted">{position}</p>
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} Twitter Profile`}><i className="fab fa-twitter"></i></a>
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} Facebook Profile`}><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} LinkedIn Profile`}><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  );


export default Shop;