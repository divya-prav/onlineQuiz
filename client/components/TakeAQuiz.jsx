import { useNavigate } from "react-router-dom"

export default function TakeAQuiz(){
    const navigate = useNavigate()
    return(
        <>
        <h2>Categories</h2>
        <ul>
            <li><button onClick={()=>navigate('/html')}>HTML</button></li>
            <li><button onClick={()=>navigate('/css')}>CSS</button></li>
            <li><button onClick={()=>navigate('/js')}>Javascript</button></li>
            <li><button onClick={()=>navigate('/advjs')}>Advanced Javascript</button></li>
            <li><button onClick={()=>navigate('/women')}>Women in cs</button></li>
            <li><button onClick={()=>navigate('/git')}>Git</button></li>
        </ul>
        </>
    )
}