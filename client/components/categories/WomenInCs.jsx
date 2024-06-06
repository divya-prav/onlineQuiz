import { useEffect,useState } from "react"

export default function WomenInCs(){
 
  const [women, setWomen] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/women");
      const res = await result.json();
      setWomen(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <>
      <h1>Women In CS Quiz</h1>
      {women &&
        women.map((ques) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name="women" value="A" />
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name="women" value="B" />
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name="women" value="C" />
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name="women" value="D" />
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'>Submit</button>
    </>
  );
}