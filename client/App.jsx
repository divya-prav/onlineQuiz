import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TakeAQuiz from "./components/TakeAQuiz";
import HtmlQuiz from "./components/categories/htmlQuiz";
import CssQuiz from "./components/categories/cssQuiz";
import GitQuiz from "./components/categories/GitQuiz";
import JavascriptQuiz from "./components/categories/JavascriptQuiz";
import AdvancedJsQuiz from "./components/categories/AdvancedJsQuiz";
import WomenInCs from "./components/categories/WomenInCs";

const App = () => {

    return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/> 
        <Route path="/quiz" element={<TakeAQuiz/>}/>
        <Route path="/html" element={<HtmlQuiz/>}/>
        <Route path="/css" element={<CssQuiz/>}/>
        <Route path="/git" element={<GitQuiz/>}/>
        <Route path="/js" element={<JavascriptQuiz/>}/>
        <Route path="/advjs" element={<AdvancedJsQuiz/>}/>
        <Route path="/women" element={<WomenInCs/>}/>
      </Routes>
      </div>
    );
  }
  
  export default App;