import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-linear-to-r from-gray-800 to-gray-950 text-slate-200 text-sm sm:text-base">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
