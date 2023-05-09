import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";
import DoubtCard from "../components/DoubtCard";

const DoubtsPage = () => {
  const [doubts, setDoubts] = useState([]);
  const getAllDoubts = async () => {
    const response = await axios.get("http://localhost:3001/doubts");
    setDoubts(response.data);
    // console.log(response);
  };

  getAllDoubts();
  // console.log(doubts);
  return (
    <div className=" h-screen bg-gray-900">
      <Navbar />
      <div className="w-2/3 mx-auto">
        {doubts.map((doubt, idx) => {
          return <DoubtCard doubt={doubt} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default DoubtsPage;
