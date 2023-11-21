import React from "react";
export const CategoryCard = ({ image, title, description }) => (
  <div className="category-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export const DoctorCard = ({ doctor }) => {
  const {
    profilePicture,
    name,
    doctorType,
    experience,
    location,
    clinicName,
    consultationFees,
    rating,
    reviews,
    available,
  } = doctor;

  return (
    <div className="doctor-card">
      <div className="profile-picture">
        <img src={profilePicture} alt={name} />
        <div className="tick-icon">&#x2713;</div>
      </div>
      <div className="details">
        <h2>{name}</h2>
        <h5>{doctorType}</h5>
        <h5>{experience} years of experience overall</h5>
        <p>
          <b>{location}</b> &#183; {clinicName}
        </p>
        <p>₹{consultationFees} Consultation Fees at clinic</p>
        {/* <div className="rating"> */}

        <p>
          <span className="rating">
            <img
              src={require("../Images/thumbsup.png")}
              className="thumbs-up-icon"
            />
            {rating}%
          </span>
          <span> </span>
          <span>
            <b>
              <u>{reviews} Patient Stories</u>
            </b>
          </span>
        </p>
        {/* </div> */}
      </div>
      <div>
        <p className={available ? "available" : "unavailable"}>
          <img
            src={require(available
              ? "../Images/available.png"
              : "../Images/unavailable.png")}
          />
          {available ? " Available " : " Unavailable "}Today
        </p>
        <button className="book-appointment-btn">
          <p>
            Book Appointment<p style={{ fontSize: "10px" }}>No Booking fee</p>
          </p>
        </button>
      </div>
    </div>
  );
};
