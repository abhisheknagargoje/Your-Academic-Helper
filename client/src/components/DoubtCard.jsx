import LinkButton from "./LinkButton";

const DoubtCard = (props) => {
  const { title, content, subject, unit, _id } = props.doubt;
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
      <LinkButton text="Answer" link={answerPageLink} />
    </div>
  );
};

export default DoubtCard;
