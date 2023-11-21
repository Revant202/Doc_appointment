import React,{useState,useEffect} from 'react';
import { DoctorCard } from './Card';

const DoctorList = () => {
    const example = [
        {
          "id": 1,
          "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiozx6bm0ZxBPafemmlZXpuHdFvyObRtAfBw&usqp=CAU",
          "name": "Dr. John Doe",
          "doctorType": "Dentist",
          "experience": 10,
          "location": "123 Main Street, Cityville",
          "clinicName": "City Dental Clinic",
          "consultationFees": 50,
          "rating": 92,
          "reviews": 45,
          "available": true
        },
        {
          "id": 2,
          "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NCYGRXV7kTpJGlgxN81lU-oEi47JegB1Sw&usqp=CAU",
          "name": "Dr. Jane Smith",
          "doctorType": "Cardiologist",
          "experience": 15,
          "location": "456 Oak Avenue, Townsville",
          "clinicName": "Heart Care Center",
          "consultationFees": 75,
          "rating": 88,
          "reviews": 30,
          "available": false
        },
        {
          "id": 3,
          "profilePicture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVatDikPAadlW-1O8iY4vqkSZq29RQLGM3aQ&usqp=CAU",
          "name": "Dr. Alex Johnson",
          "doctorType": "Pediatrician",
          "experience": 8,
          "location": "789 Pine Lane, Villagetown",
          "clinicName": "Kids Health Clinic",
          "consultationFees": 60,
          "rating": 95,
          "reviews": 60,
          "available": true
        }
      ]
      
    const [doctors, setDoctors] = useState(example);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('your_backend_api_endpoint');
    //       const result = await response.json();
    //       setDoctors(result);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    return (
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    );
  };
  
  export default DoctorList;