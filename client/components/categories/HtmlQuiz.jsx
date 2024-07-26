import { useEffect,useState } from "react";



export default function HtmlQuiz(){
  const [html,setHtml] = useState([])
  const solution = [];
  let [result,setResult] = useState(null);


  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/html");
      const res = await result.json();
      // console.log(res[0].questions)
      setHtml(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  function handleClick(){
    console.log(solution)
    let count = 0
    for(let i=0;i<html.length;i++){
      if(html[i].answer === solution[i]){
        count++;
      }
   }
   setResult(count)
  
  }

  return (
    <>
      <h1>HTML Quiz</h1>
      {result && <h1>{result}</h1>}
      {html &&
        html.map((ques,i) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name={`html${i}`} value="A" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name={`html${i}`} value="B" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name={`html${i}`} value="C" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name={`html${i}`} value="D" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit' onClick={handleClick} >Submit</button>
    </>
  );
}