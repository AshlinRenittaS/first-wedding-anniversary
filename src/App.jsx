import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";
import Distance from "./pages/Distance";
import Surprise from "./pages/Surprise";
import Forever from "./pages/Forever";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/distance" element={<Distance />} />
      <Route path="/surprise" element={<Surprise />} />
      <Route path="/forever" element={<Forever />} />
    </Routes>
  );
}

export default App;