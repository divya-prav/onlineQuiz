import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YourQuiz from "./categories/YourQuiz";

const MakeAQuiz = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);
  const [array, setArray] = useState([]);

  const [data, setData] = useState(
    Array(10).fill({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    })
  );
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setData(updatedData);
  };
  const display = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(data);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let makePost = true;

    data.forEach((item) => {
      if (
        item.question === "" ||
        item.option1 === "" ||
        item.option2 === "" ||
        item.option3 === "" ||
        item.option4 === "" ||
        item.answer === ""
      ) {
        setError("Please enter all the quiz");
        makePost = false;
      }
    });
    if (makePost) {
      const postData = await fetch("http://localhost:8080/api/makeaquiz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          data: data,
        }),
      });

      console.log(postData);
      setResponse(true);
      setArray(postData);
    }
  }

  function handleQuiz() {
    console.log("handle quiz clicked");

    return <YourQuiz data={array} />;
  }

  return (
    <>
      {response ? (
        <YourQuiz data={data} />
      ) : (
        <div>
          <h1>FORM HERE!</h1>
          {error && <h1>{error}</h1>}
          <form>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: "50%" }}
              >
                <option value="">Select a category...</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="git">Git</option>
                <option value="advancedjs">AdvancedJS</option>
                <option value="javascript">Javascript</option>
                <option value="womenincs">Women In CS</option>
                <option value="random">Other</option>
              </select>
              {/* <input placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)}/> */}
              {data.map((item, index) => (
                <div key={index}>
                  <input
                    className="input"
                    placeholder="Question"
                    type="text"
                    value={item.question}
                    name="question"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />
                  <input
                    className="input"
                    placeholder="Option 1"
                    type="text"
                    value={item.option1}
                    name="option1"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />
                  <input
                    className="input"
                    placeholder="Option 2"
                    type="text"
                    value={item.option2}
                    name="option2"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />

                  <input
                    className="input"
                    placeholder="Option 3"
                    type="text"
                    value={item.option3}
                    name="option3"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />
                  <input
                    className="input"
                    placeholder="Option 4"
                    type="text"
                    value={item.option4}
                    name="option4"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />
                  <input
                    className="input"
                    placeholder="Answer"
                    type="text"
                    value={item.answer}
                    name="answer"
                    onChange={(e) => handleChange(e, index)}
                  />
                  <br />
                </div>
              ))}
              <button
                style={{ width: "20%", height: "40px" }}
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default MakeAQuiz;
