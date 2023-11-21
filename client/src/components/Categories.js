import React, { useState, useEffect } from 'react'
import {CategoryCard} from './Card';

function Categories() {
    const example = [
        {
          "id": 1,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiozx6bm0ZxBPafemmlZXpuHdFvyObRtAfBw&usqp=CAU",
          "title": "Card 1",
          "description": "This is the description for Card 1."
        },
        {
          "id": 2,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NCYGRXV7kTpJGlgxN81lU-oEi47JegB1Sw&usqp=CAU",
          "title": "Card 2",
          "description": "This is the description for Card 2."
        },
        {
          "id": 3,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVatDikPAadlW-1O8iY4vqkSZq29RQLGM3aQ&usqp=CAU",
          "title": "Card 3",
          "description": "This is the description for Card 3."
        }
      ]
      
    const [data, setData] = useState(example);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('your_backend_api_endpoint');
    //       const result = await response.json();
    //       setData(result);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  return (
    <div className='category'>
        {data.map((item) => (
        <CategoryCard
          key={item.id} 
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default Categories