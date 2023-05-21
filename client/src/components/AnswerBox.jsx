import axios from "axios";
import LinkButton from "./LinkButton";
import { useEffect, useState } from "react";

const AnswerBox = ({ doubtId }) => {
  const [doubt, setDoubt] = useState({});

  useEffect(() => {
    const getDoubt = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/doubts/${doubtId}`
        );
        setDoubt(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDoubt();

  }, []);

  const { title, content, subject, unit, _id } = doubt;
  const base = window.location.origin;
  const answerPageLink = `${base}/doubts/${_id}`;

  return (
    <div className="max-w-full mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={answerPageLink}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {content}
      </p>
      <div className=" mt-6">
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write your answer..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Submit Answer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnswerBox;
