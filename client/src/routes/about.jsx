import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen max-w-full p-6 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Your Academic Helper
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          Your Academic Helper is a web-based platform designed to assist
          college students in overcoming academic hurdles and enhancing their
          learning experience through peer collaboration. With Your Academic
          Helper, you can get your doubts solved, schedule group study sessions,
          and seek assistance from fellow learners.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          We believe that collaborative learning is a powerful tool for academic
          success. By connecting students and enabling them to support each
          other, we aim to create a supportive environment where everyone can
          thrive.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          Our platform allows you to ask questions and receive solutions from
          willing peers. You can also schedule group study sessions with your
          classmates to tackle challenging topics together and make studying
          more engaging and effective.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          Join Your Academic Helper today and unlock the power of peer learning
          in your college journey!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get Started
        </Link>
        <div className="mt-6 text-gray-700 dark:text-gray-400">
          <p>Made by:</p>
          <ul className="list-disc pl-6">
            <li>23101 Aarav Nair</li>
            <li>23102 Abhishek Nagargoje</li>
            <li>23103 Aditya Deshpande</li>
            <li>23121 Shivam Chandak</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
