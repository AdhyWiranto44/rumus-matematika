import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";
import PageLayout from "../../layouts/page";


export default function LuasPersegiPanjang() {
    const [width, setWidth] = useState(0.0);
    const [height, setHeight] = useState(0.0);
    const [result, setResult] = useState(0.0);

    const meta = {
        "img": "persegi-panjang.jpg"
    }

    function calculate() {
        let result = parseFloat(width * height);
        setResult(result);
    }

    return (
        <PageLayout
            calculationForm={
                <>
                    <Title title="Luas Persegi Panjang" />
                    <Input
                        labelName={"Panjang"}
                        inputName={"width"}
                        type={"number"}
                        placeholder={"0"}
                        onChange={
                            (e) => setWidth(e.target.value)
                        }
                    />
                    <Input
                        labelName={"Lebar"}
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
    );
}