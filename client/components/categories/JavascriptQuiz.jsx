import { useEffect,useState } from "react";



export default function JavascriptQuiz(){

  const [js, setJs] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/js");
      const res = await result.json();
      setJs(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <>
      <h1>JavaScript Quiz</h1>
      {js &&
        js.map((ques) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name="js" value="A" />
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name="js" value="B" />
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name="js" value="C" />
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name="js" value="D" />
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'>Submit</button>
    </>
  );
}