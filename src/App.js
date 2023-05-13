

import './App.css';
import { useState } from 'react';



function App() {
    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");
    let [result, setResult] = useState("");
    //   let [flag,setFlag] = useState(false);
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);
    let [numError, setNumError] = useState(false)

    function validation(e) {
        if (num1 === "" || num2 === "") {
            setError(true);
            setSuccess(false)
            setNumError(false);
        }
        else if (isNaN(num1) || isNaN(num2)) {
            setNumError(true);
            setError(false)
            setSuccess(false);

        }
        else {

            setNum1(parseInt(num1));
            setNum2(parseInt(num2));
            let btnVal = e.target.innerText;
            calculation(btnVal);
            setSuccess(true);
            setError(false)
            setNumError(false);

        }
    }
    function calculation(value) {
        if (value === "+") {
            setResult(parseInt(num1) + parseInt(num2));
        }
        else if (value === "-") {
            // setResult(setNum1(num1) - setNum2(num2)); .
            setResult(eval(num1 - num2));
        }
        else if (value === "*") {
            setResult(parseInt(num1) * parseInt(num2));
        }
        else if (value === "/") {
            setResult(parseInt(num1) / parseInt(num2));
        }
    }

    return (
        <div className='container'>
            <h1>React Calculator</h1>
            <div className='inputs'>
                <input type="text" placeholder='Num1' onChange={(e) => setNum1(e.target.value)} />
                <input type="text" placeholder='Num2' onChange={(e) => setNum2(e.target.value)} />

            </div>
            <div className='buttons'>
                <button onClick={function (e) { validation(e) }} >+</button>
                <button onClick={function (e) { validation(e) }} >-</button>
                <button onClick={function (e) { validation(e) }} >*</button>
                <button onClick={function (e) { validation(e) }} >/</button>
            </div>
            {success ? <p style={{ color: "white", fontSize: "24px", marginBottom: "30px" }}>Result = {result}</p> : ""}
            {success ? <p style={{ color: "rgba(71, 245, 88, 1)", fontSize: "24px" }}>Success : Your result is shown above!</p> : ""}
            {error ? <p style={{ color: "rgba(227, 55, 55, 1)", fontSize: "24px" }}>Error :  Num cannot be empty</p> : ""}
            {numError ? <p style={{ color: "rgba(227, 55, 55, 1)", fontSize: "24px" }}>Error :  Input should be a number</p> : ""}
        </div>

    )
}

export default App;
