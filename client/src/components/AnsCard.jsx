const AnsCard = ({ solver, answer }) => {
  return (
    <div className="block my-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`Answered by ${solver.firstName} ${solver.lastName}`}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {answer.content}
      </p>
    </div>
  );
};

export default AnsCard;
