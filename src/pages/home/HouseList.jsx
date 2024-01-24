import { useEffect, useState } from "react";
import axios from "axios";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://house-hunter-server-nu.vercel.app/api/houses",
          {
            headers: { "x-auth-token": token },
          }
        );
        setHouses(response.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div>
      <h2>Your Houses</h2>
      <ul>
        {houses.map((house) => (
          <li key={house._id}>{house.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
