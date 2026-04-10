import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import HomePage from "@/pages/HomePage";
import WorkPage from "@/pages/WorkPage";
import AboutPage from "@/pages/AboutPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
