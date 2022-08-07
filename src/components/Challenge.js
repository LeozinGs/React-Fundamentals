import React, { useState } from "react";

const Challenge = () => {
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);

    const somar = (e) => {
        console.log(num1 + num2);
    };
    
    return(
        <div>
            <div>
                <h1>Digite os números a serem somados</h1>
            </div>
            <div>
                <input type="Text" value={num1} onChange={e => setNum1(parseInt(e.target.value))}/> 
                <input type="Text" value={num2} onChange={e => setNum2(parseInt(e.target.value))}/>
            </div>
            <div>
                <button onClick={somar}>Somar</button>
            </div>
        </div>
    );

};

export default Challenge;