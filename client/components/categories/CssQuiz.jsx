import { useEffect,useState } from "react";

export default function CssQuiz(){

  const [css, setCss] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/css");
      const res = await result.json();
      //console.log(res[0].questions.options[0])
      setCss(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <>
      <h1>CSS Quiz</h1>
      {css &&
        css.map((ques) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name="css" value="A" />
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name="css" value="B" />
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name="css" value="C" />
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name="css" value="D" />
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'>Submit</button>
    </>
  );
}