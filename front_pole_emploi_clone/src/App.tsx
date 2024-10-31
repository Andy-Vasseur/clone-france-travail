// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
