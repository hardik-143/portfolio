import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Error from "./Error";
import Home from "./Home";
import Layout from "./Layout";
import Projects from "./Projects";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
