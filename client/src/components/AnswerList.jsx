import axios from "axios";
import { useEffect, useState } from "react";
import AnsCard from "./AnsCard";

const AnswerList = ({ doubtId }) => {
  const [answers, setAnswers] = useState([]);
  const [solver, setSolver] = useState({});

  useEffect(() => {
    const getAnswers = async () => {
      const response = await axios.get(
        `http://localhost:3001/answers/${doubtId}`
      );

      setAnswers(response.data);
    };

    const getSolver = async () => {
      const response = await axios.get(
        `http://localhost:3001/auth/${answers[0].solverId}`
      );
      setSolver(response.data);
    };

    getAnswers();
    getSolver();
  }, [answers, doubtId]);

  return (
    <div className="mt-10">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Previous Answers (if any)
      </h5>
      {answers.map((answer, idx) => (
        <AnsCard answer={answer} solver={solver} key={idx} />
      ))}
    </div>
  );
};

export default AnswerList;
