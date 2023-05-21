import { useState } from "react";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDoubt = () => {
  const authorId = localStorage.getItem("userID");
  const [doubt, setDoubt] = useState({
    title: "",
    content: "",
    subject: "",
    unit: "",
    authorId: authorId,
  });

  const handleInputChange = (fieldname, value) => {
    setDoubt({
      ...doubt,
      [fieldname]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/doubts/", doubt);
      alert("Doubt created successfully!");
      navigate("/doubts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" h-screen bg-gray-900 ">
      <Navbar />
      <div className="w-2/3 mx-auto">
        <h3 className="text-3xl mb-4 font-bold dark:text-white">
          Ask Your Doubt
        </h3>
        <form onSubmit={handleSubmit}>
          <InputField
            title="Title"
            value={doubt.title}
            onChange={(value) => handleInputChange("title", value)}
          />
          <textarea
            id="comment"
            rows="4"
            className=" rounded-md w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write your detailed question.."
            required
            value={doubt.content}
            onChange={(event) =>
              setDoubt({ ...doubt, content: event.target.value })
            }
          ></textarea>
          <InputField
            title="Subject"
            value={doubt.subject}
            onChange={(value) => handleInputChange("subject", value)}
          />
          <InputField
            title="Unit Name"
            value={doubt.unit}
            onChange={(value) => handleInputChange("unit", value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Doubt
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDoubt;
