import { useEffect,useState } from "react";



export default function HtmlQuiz(){
  const [html,setHtml] = useState([])


  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/html");
      const res = await result.json();
      //console.log(res[0].questions.options[0])
      setHtml(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <>
      <h1>HTML Quiz</h1>
      {html &&
        html.map((ques) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name="html" value="A" />
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name="html" value="B" />
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name="html" value="C" />
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name="html" value="D" />
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'>Submit</button>
    </>
  );
}