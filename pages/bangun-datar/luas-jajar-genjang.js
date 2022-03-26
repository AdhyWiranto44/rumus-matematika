import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";
import PageLayout from "../../layouts/Page";


export default function LuasJajarGenjang() {
    const [base, setBase] = useState(0.0);
    const [height, setHeight] = useState(0.0);
    const [result, setResult] = useState(0.0);

    const meta = {
        "img": "jajar-genjang.jpg"
    }

    function calculate() {
        let result = parseFloat(base * height);
        setResult(result);
    }

    return (
        <>
            <PageLayout
                calculationForm={
                    <>
                        <Title title="Luas Jajar Genjang" />
                        <Input
                            labelName={"Alas"}
                            inputName={"base"}
                            type={"number"}
                            placeholder={"0"}
                            onChange={
                                (e) => setBase(e.target.value)
                            }
                        />
                        <Input
                            labelName={"Tinggi"}
                            inputName={"height"}
                            type={"number"}
                            placeholder={"0"}
                            onChange={
                                (e) => setHeight(e.target.value)
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