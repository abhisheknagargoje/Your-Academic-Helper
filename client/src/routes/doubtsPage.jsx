import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import DoubtCard from "../components/DoubtCard";
import LinkButton from "../components/LinkButton";
import { Link } from "react-router-dom";

const DoubtsPage = () => {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    const getAllDoubts = async () => {
      const response = await axios.get("http://localhost:3001/doubts");
      setDoubts(response.data);
    };

    getAllDoubts();
  }, []);

  const createDoubtLink = `${window.location.origin}/doubts/createDoubt`;
  return (
    <div className=" h-screen bg-gray-900">
      <Navbar />
      <div className="w-2/3 mx-auto m-2">
        <LinkButton text="Create Doubt" link={createDoubtLink} />
      </div>
      <div className="w-2/3 mx-auto">
        {doubts.map((doubt, idx) => {
          return <DoubtCard doubt={doubt} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default DoubtsPage;
