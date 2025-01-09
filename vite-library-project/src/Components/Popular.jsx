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
                <div key={index}>
                    <img src={element.cover_image} alt={element.title} width="120px" height="180px"/>
                    <div className="middle">
                        <div className="text">View More</div>
                    </div>
                    <p>{element.title}</p>
                </div>
                ))
            }
        </div>
    </div>
  );
}

export default Popular;
