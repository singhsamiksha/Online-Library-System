import { useState, useEffect } from "react";

function Popular({ data }) {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
      setPopular(data.slice(0, 8));
  }, [data]);

  return (
    <div className="popular_box">
        <h2>Popular Books</h2>
        <div className="popular_book">
            {
                popular.map((element, index) => (
                <div key={index} className="book">
                    <img src={element.cover_image} alt={element.title} width="180px" height="200px"/>
                    <p>{element.title}</p>
                    <button className="view_button">View More</button>
                </div>
                ))
            }
        </div>
    </div>
  );
}

export default Popular;
