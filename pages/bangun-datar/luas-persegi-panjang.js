import HomeButton from "../../components/HomeButton";
import HomeLayout from "../../layouts/home";
import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";


export default function LuasPersegiPanjang() {
    const [width, setWidth] = useState(0.0);
    const [height, setHeight] = useState(0.0);
    const [result, setResult] = useState(0.0);

    function calculate() {
        let result = parseFloat(width * height);
        setResult(result);
    }

    return (
        <HomeLayout
            pageContent={
                <>
                    <HomeButton />
                    <Title title="Luas Persegi Panjang" />
                    <div className="row">
                        <div className="col-md-3">
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
                        </div>
                    </div>
                    <Result result={result} />
                </>
            }
        />
    );
}