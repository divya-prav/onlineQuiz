import { useEffect,useState } from "react"

export default function WomenInCs(){
 
  const [women, setWomen] = useState(null);
  const solution = [];
  let [result,setResult] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/women");
      const res = await result.json();
      setWomen(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  function handleClick(){
    console.log(solution)
    let count = 0
    for(let i=0;i<women.length;i++){
      if(women[i].answer === solution[i]){
        count++;
      }
   }
   setResult(count)
  
  }

  return (
    <>
      <h1>Women In CS Quiz</h1>
      {result && <h1>{result}</h1>}
      {women &&
        women.map((ques,i) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name={`women${i}`} value="A" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.A}</label>
              <br />
              <input type="radio" id="question2" name={`women${i}`} value="B" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.B}</label>
              <br />
              <input type="radio" id="question3" name={`women${i}`} value="C" onChange={(e)=>solution[i]=e.target.value} />
              <label>{ques.options.C}</label>
              <br />
              <input type="radio" id="question4" name={`women${i}`} value="D" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options.D}</label>
              <br />
            </div>
          );
        })}

        <button type='submit' onClick={handleClick}>Submit</button>
    </>
  );
}