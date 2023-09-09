import { useState } from "react";
import Question from "./Question";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col flex-nowrap">
      <header className="flex-0 bg-red-800 px-2 py-1">
        <h1 className="text-white font-bold tracking-tight text-2xl">Quizz</h1>
      </header>
      <main className="flex-1">
        <div>
          <Question index={count} />
        </div>
        {count < 10 && (
          <button
            onClick={() => setCount(count + 1)}
            className="mx-auto block w-40 bg-red-600 text-white font-semibold p-2 rounded-full"
          >
            {count ? "Próximo" : "Iniciar"}
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
