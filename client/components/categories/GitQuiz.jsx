import { useEffect,useState } from "react";


export default function GitQuiz(){

 
  const [git, setGit] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/git");
      const res = await result.json();
      //console.log(res[0].questions.options[0])
      setGit(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <>
      <h1>Git Quiz</h1>
      {git &&
        git.map((ques) => {
          return (
            <div>
              <h2>{ques.question}</h2>

              <input type="radio" id="question1" name="git" value="A" />
              <label>{ques.options[0]}</label>
              <br />
              <input type="radio" id="question2" name="git" value="B" />
              <label>{ques.options[1]}</label>
              <br />
              <input type="radio" id="question3" name="git" value="C" />
              <label>{ques.options[2]}</label>
              <br />
              <input type="radio" id="question4" name="git" value="D" />
              <label>{ques.options[3]}</label>
              <br />
            </div>
          );
        })}

        <button type='submit'>Submit</button>
    </>
  );
}