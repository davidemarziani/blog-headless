import { useState } from "react";

function Fibonacci() {
    // `a` = numero corrente, `b` = prossimo numero
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);

    const handleNext = () => {
        const nextValue = a + b;
        setA(b);
        setB(nextValue);
    };



    return (
        <div>
            <h2>Fibonacci</h2>
            <p>Numero corrente: {a}</p>
            <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={handleNext}>Prossimo numero</button>
            </div>
        </div>
    );

}

export default Fibonacci;