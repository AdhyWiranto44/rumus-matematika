import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";
import PageLayout from "../../layouts/page";


export default function LuasPersegi() {
    const [side, setSide] = useState(0.0);
    const [result, setResult] = useState(0.0);

    const meta = {
        "img": "persegi.jpg"
    }

    function calculate() {
        let result = parseFloat(side * side);
        setResult(result);
    }

    return (
        <>
            <PageLayout
                calculationForm={
                    <>
                        <Title title="Luas Persegi" />
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
                        <Result result={result} />
                    </>
                }
                imageItem={meta.img}
            />
        </>
    );
}