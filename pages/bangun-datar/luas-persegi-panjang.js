import HomeButton from "../../components/HomeButton";
import HomeLayout from "../../layouts/home";
import { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import Result from "../../components/Result";
import DescriptionButton from "../../components/DescriptionButton";
import FormulaModal from "../../components/FormulaModal";


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
        <HomeLayout
            pageContent={
                <>
                    <div className="row mb-3">
                        <div className="col">
                            <HomeButton />
                            <DescriptionButton />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-8">
                            <h5 className="text-center text-uppercase">Gambar</h5>
                            <img className="d-block mx-auto w-50" src={`/img/${meta.img}`} alt={meta.img} />
                        </div>
                    </div>
                    <FormulaModal />
                </>
            }
        />
    );
}