import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnswerBox from "../components/AnswerBox";

const AnswersPage = () => {
  const { id } = useParams();

  return (
    <div className=" h-screen bg-slate-900">
      <Navbar />
      <AnswerBox doubtId={id} />
    </div>
  );
};

export default AnswersPage;
