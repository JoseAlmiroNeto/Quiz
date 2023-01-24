import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col items-center gap-7">
      <h2 className="font-bold text-2xl">Fim de Jogo!</h2>
      <p>
        Pontuação:{" "}
        <span className="text-green-500 font-bold"> {quizState.score} </span>
      </p>
      <p>
        Você acertou{" "}
        <span className="text-green-500 font-bold"> {quizState.score} </span> de{" "}
        <span className="font-bold">{quizState.questions.length}</span>{" "}
        perguntas.
      </p>
      <button
        className="font-bold bg-gradient-to-r from-purple-600 to-purple-800 pr-6 pl-6 pt-2 pb-2 rounded-3xl"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        Reiniciar
      </button>
      <img className="w-full pt-8" src={WellDone} alt="GameOver" />
    </div>
  );
};
