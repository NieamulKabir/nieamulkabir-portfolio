
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ProjectsDetails from './Pages/ProjectDetails/ProjectsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectsDetails />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>404 Nothing Found</p></main>} />
      </Routes>
    </div>
  );
}

export default App;
