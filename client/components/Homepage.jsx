import { useNavigate } from "react-router-dom";

export default function Homepage(){

   const navigate = useNavigate();

    return(
        <>
        <h1 className="bg-gray-900">Welcome to Online Quiz</h1>
        <button onClick={()=>navigate('/quiz')}>Take a Quiz</button>
        <button onClick={()=>navigate('/makequiz')}> Make a Quiz</button>
        </>
    )
}