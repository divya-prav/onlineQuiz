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
      options: ["", "", "", ""],
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

  const handleOptionChange = (e, qIndex, oIndex) => {
    const { value } = e.target;
    const updatedData = data.map((item, i) => {
      if (i === qIndex) {
        const updatedOptions = item.options.map((option, j) =>
          j === oIndex ? value : option
        );
        return { ...item, options: updatedOptions };
      }
      return item;
    });
    setData(updatedData);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let makePost = true;

    data.forEach((item) => {
      if (
        item.question === "" ||
        item.options[0] === "" ||
        item.options[1] === "" ||
        item.options[2] === "" ||
        item.options[3] === "" ||
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
                  {item.options.map((option, oIndex) => (
                    <>
                      <input
                        key={oIndex}
                        placeholder={`Option ${oIndex + 1}`}
                        type="text"
                        value={option}
                        name={`option${oIndex}`}
                        onChange={(e) => handleOptionChange(e, index, oIndex)}
                      />
                      <br />
                    </>
                  ))}
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
