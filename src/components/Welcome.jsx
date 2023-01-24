import React from "react";
import Quiz from "../img/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-3xl">Seja Bem-Vindo</h2>
      <p className="text-purple-600">Clique no botão abaixo para iniciar</p>
      <button className="font-bold bg-gradient-to-r from-purple-600 to-purple-800 pr-5 pl-5 pt-2 pb-2 rounded-3xl" onClick={() => dispatch({type: "CHANGE_STATE"})}>
        Iniciar
      </button>
      <img className="w-full" src={Quiz} alt="Inicio do quiz" />
    </div>
  );
};
