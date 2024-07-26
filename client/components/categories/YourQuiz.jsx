import { useState } from "react";

export default function YourQuiz(props) {
  const [quiz, setQuiz] = useState(props.data);
  //const [category,setCategory] = useState(props.category)
  const solution = [];
  let [result, setResult] = useState(null);
  console.log(quiz)

  function handleClick() {
    console.log(solution);
    let count = 0;
    for (let i = 0; i < quiz.length; i++) {
      if (quiz[i].answer === solution[i]) {
        count++;
      }
    }
    setResult(count);
  }

  return (
    <>
      <h1> Quiz</h1>
      {result && <h1>{result}</h1>}
      {quiz &&
        quiz.map((ques, i) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input
                type="radio"
                id="question1"
                name={`quiz${i}`}
                value="A"
                onChange={(e) => (solution[i] = e.target.value)}
              />
              <label>{ques.options.A}</label>
              <br />
              <input
                type="radio"
                id="question2"
                name={`quiz${i}`}
                value="B"
                onChange={(e) => (solution[i] = e.target.value)}
              />
              <label>{ques.options.B}</label>
              <br />
              <input
                type="radio"
                id="question3"
                name={`quiz${i}`}
                value="C"
                onChange={(e) => (solution[i] = e.target.value)}
              />
              <label>{ques.options.C}</label>
              <br />
              <input
                type="radio"
                id="question4"
                name={`quiz${i}`}
                value="D"
                onChange={(e) => (solution[i] = e.target.value)}
              />
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
