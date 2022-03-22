import HomeButton from "../../components/HomeButton";
import HomeLayout from "../../layouts/home";
import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";


export default function LuasPersegi() {
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
                    <HomeButton />
                    <Title title="Luas Persegi" />
                    <div className="row">
                        <div className="col-md-3">
                            <Input
                                labelName={"Sisi"}
                                inputName={"side"}
                                type={"number"}
                                placeholder={"0"}
                                onChange={
                                    (e) => setSide(e.target.value)
                                }
                            />
                            <SubmitButton onClick={calculate} />
                        </div>
                    </div>
                    <Result result={result} />
                </>
            }
        />
    );
}