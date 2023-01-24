import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { Option } from "./Option";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="bg-purple-800 p-4 rounded-xl flex flex-col items-center w-[30%] gap-4">
      <p className="font-semibold">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <div className="w-[90%]">
        <h2 className="text-2xl text-center font-bold">{currentQuestion.question}</h2>
      </div>
      <div className="w-[90%]">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button className="font-bold bg-purple-900 pr-8 pl-8 pt-2 pb-2 rounded-3xl" onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};
