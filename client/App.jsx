import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TakeAQuiz from "./components/TakeAQuiz";
import HtmlQuiz from "./components/categories/htmlQuiz";
import CssQuiz from "./components/categories/cssQuiz";
import GitQuiz from "./components/categories/GitQuiz";
import JavascriptQuiz from "./components/categories/JavascriptQuiz";
import AdvancedJsQuiz from "./components/categories/AdvancedJsQuiz";
import WomenInCs from "./components/categories/WomenInCs";
import MakeAQuiz from "./components/MakeAQuiz";
import YourQuiz from "./components/categories/YourQuiz";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<TakeAQuiz />} />
        <Route path="/html" element={<HtmlQuiz />} />
        <Route path="/css" element={<CssQuiz />} />
        <Route path="/git" element={<GitQuiz />} />
        <Route path="/js" element={<JavascriptQuiz />} />
        <Route path="/advjs" element={<AdvancedJsQuiz />} />
        <Route path="/women" element={<WomenInCs />} />
        <Route path="/makequiz" element={<MakeAQuiz />} />{" "}
        <Route path="/yourQuiz" element={<YourQuiz/>}/>
      </Routes>
    </div>
  );
};

export default App;
