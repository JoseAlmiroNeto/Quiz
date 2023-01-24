import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`p-3 rounded-lg mb-5 cursor-pointer text-center text-xl font-semibold ${
        quizState.answerSelected && option === answer ? "bg-green-600" : "bg-purple-900 hover:bg-purple-700"
      }`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};
