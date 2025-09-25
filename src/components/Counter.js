//Importando o hook useState do react
import {useState} from "react";

const Counter = () => {

    // let x = 0;
    // console.log(x)

    const [count, setCount] = useState(0)

    return (
        
        <>
        {/* <div>
            <p>Contador: {x}</p>
            <button>onClick={() => (x = x+1)}Aumentar</button>
        </div> */}

    <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>

        </>
    );
}

export default Counter;