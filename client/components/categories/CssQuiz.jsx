import { useEffect, useState } from "react";

export default function CssQuiz() {
  const [css, setCss] = useState(null);
  const solution = [];
  let [result, setResult] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/css");
      const res = await result.json();
      setCss(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  function handleClick() {
    console.log("solution----"+solution);
    let count = 0;
    for (let i = 0; i < css.length; i++) {
      console.log(css[i].answer)
      if (css[i].answer === solution[i]) {
        count++;
      }
    }
    console.log(count)
    setResult(count);
  }

  return (
    <>
      <h1>CSS Quiz</h1>
      {result && <h1>{result}</h1>}
      {css &&
        css.map((ques,i) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name={`css${i}`} value="A" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name={`css${i}`} value="B" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name={`css${i}`} value="C" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name={`css${i}`} value="D" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
