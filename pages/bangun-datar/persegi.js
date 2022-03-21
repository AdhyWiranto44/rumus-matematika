import HomeButton from "../../components/HomeButton";
import HomeLayout from "../../layouts/home";
import { useState } from "react";


export default function Persegi() {
    const [side, setSide] = useState(0.0);
    const [result, setResult] = useState(0.0);

    function calculate() {
        let result = parseFloat(side * side);
        setResult(result);
    }

    return (
        <HomeLayout
            pageContent={
                <>
                    <div className="row mb-3">
                        <div className="col">
                            <HomeButton />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h3>Rumus Persegi</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label>Sisi</label>
                            <input type="number" name="side" placeholder="0" onChange={(e) => setSide(e.target.value)} />
                            <button onClick={calculate}>Submit</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h4>Hasil: {result}</h4>
                        </div>
                    </div>
                </>
            }
        />
    );
}