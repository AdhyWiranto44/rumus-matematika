import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";
import PageLayout from "../../layouts/page";


export default function KelilingJajarGenjang() {
    const [a, setA] = useState(0.0);
    const [b, setB] = useState(0.0);
    const [c, setC] = useState(0.0);
    const [d, setD] = useState(0.0);
    const [result, setResult] = useState(0.0);

    const meta = {
        "img": "jajar-genjang.jpg",
        "formula": "rumus-keliling-jajar-genjang.jpg"
    }

    function calculate() {
        let result = parseFloat(a+b+c+d);
        setResult(result);
    }

    return (
        <PageLayout
            calculationForm={
                <>
                    <Title title="Keliling Persegi Panjang" />
                    <Input
                        labelName={"A"}
                        inputName={"a"}
                        type={"number"}
                        placeholder={"0"}
                        onChange={
                            (e) => setA(e.target.value)
                        }
                    />
                    <Input
                        labelName={"B"}
                        inputName={"b"}
                        type={"number"}
                        placeholder={"0"}
                        onChange={
                            (e) => setB(e.target.value)
                        }
                    />
                    <Input
                        labelName={"C"}
                        inputName={"c"}
                        type={"number"}
                        placeholder={"0"}
                        onChange={
                            (e) => setC(e.target.value)
                        }
                    />
                    <Input
                        labelName={"D"}
                        inputName={"d"}
                        type={"number"}
                        placeholder={"0"}
                        onChange={
                            (e) => setD(e.target.value)
                        }
                    />
                    <SubmitButton onClick={calculate} />
                    <Result result={result} />
                </>
            }
            imageItem={meta.img}
            formulaItem={meta.formula}
        />
    );
}