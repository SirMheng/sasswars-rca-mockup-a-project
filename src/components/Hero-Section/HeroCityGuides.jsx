import React, { useEffect, useState } from "react";
import { getCities } from "../../services/events.service";
// import testImage from "../../assets/images/city-image/Seattle.png";

export default function HeroCityGuides() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then(setCities);
  }, []);

  return (
    <div className="absolute w-full z-1 mt-[1246px] px-[120px]">
      <div className="mx-auto border-2 border-red-500 h-[252px] w-[1200px]">
        <div>
          <h1>CityGuides</h1>
        </div>
        <div className="mt-[31px] h-[180px] border-1 border-yellow-500">
          {/* <img src={testImage}></img> */}
          {cities.map((city) => (
            <div key={city.title}>
              <h2>{city.title}</h2>
              <img
                src={city.imageUrl}
                alt={city.title}
                className="h-[50px] w-[50px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
