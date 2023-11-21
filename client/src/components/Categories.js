import React, { useState, useEffect } from "react";
import { CategoryCard } from "./Card";
import { Link } from "react-router-dom";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/api/categories`
        );
        console.log(response);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="category">
      <div >
        <p className="desc">Book an appointment for an in-clinic consultation</p>
        <p >Find experienced doctors across all specialities</p>
      </div>
      <div className="cards">
        {data.map((item) => (
          <Link to={`/doctors/${item.category}` } style={{ textDecoration: 'none', color: 'inherit',}}>
            <CategoryCard
              key={item.id}
              image={item.image}
              title={item.category}
              description={item.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
