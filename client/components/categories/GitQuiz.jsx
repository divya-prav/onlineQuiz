import { useEffect,useState } from "react";


export default function GitQuiz(){

 
  const [git, setGit] = useState(null);
  const solution = [];
  let [result,setResult] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/git");
      const res = await result.json();
      setGit(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  function handleClick(){
    console.log(solution)
    let count = 0
    for(let i=0;i<git.length;i++){
      if(git[i].answer === solution[i]){
        count++;
      }
   }
   setResult(count)
  
  }

  return (
    <>
      <h1>Git Quiz</h1>
      {result && <h1>{result}</h1>}
      {git &&
        git.map((ques,i) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name={`git${i}`} value="A" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options[0]}</label>
              <br />
              <input type="radio" id="question2" name={`git${i}`} value="B" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options[1]}</label>
              <br />
              <input type="radio" id="question3" name={`git${i}`} value="C" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options[2]}</label>
              <br />
              <input type="radio" id="question4" name={`git${i}`} value="D" onChange={(e)=>solution[i]=e.target.value}/>
              <label>{ques.options[3]}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'onClick={handleClick}>Submit</button>
    </>
  );
}