import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quiz";

import { Welcome } from "./components/Welcome"
import { Question } from "./components/Question"
import { GameOver } from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="min-h-screen h-full w-full bg-black text-white flex flex-col items-center justify-center gap-8 pt-14">
      <h1 className='text-5xl font-bold'>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
