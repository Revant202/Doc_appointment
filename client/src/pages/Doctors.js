// Doctors.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DoctorCard } from '../components/Card';
const Doctors = () => {
  const { category } = useParams();
  console.log(category)
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/doctors/${category}`);
        console.log(response)
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [category]);

  return (
    <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
  );
};

export default Doctors;
