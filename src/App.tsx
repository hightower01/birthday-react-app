import { Route, Routes } from "react-router-dom";
import CountdownPage from "./pages/CountdownPage";
import FinalRevealPage from "./pages/FinalRevealPage";
import LoveLetterPage from "./pages/LoveLetterPage";
import MapPage from "./pages/MapPage";
import MemoryLanePage from "./pages/MemoryLanePage";
import QREntryPage from "./pages/QREntryPage";
import QuizPage from "./pages/QuizPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<QREntryPage />} />
      <Route path="/countdown" element={<CountdownPage />} />
      <Route path="/memory-lane" element={<MemoryLanePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/love-letter" element={<LoveLetterPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/final-reveal" element={<FinalRevealPage />} />
    </Routes>
  );
}

export default App;
