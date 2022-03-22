import DescriptionButton from "../components/DescriptionButton";
import FormulaModal from "../components/FormulaModal";
import HomeButton from "../components/HomeButton";
import Input from "../components/Input";
import Result from "../components/Result";
import SubmitButton from "../components/SubmitButton";
import Title from "../components/Title";
import HomeLayout from "./home";


export default function PageLayout({title, labelName, inputName, type, placeholder, onChange, onClick, result, image}) {
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
                            <Title title={title} />
                            <Input
                                labelName={labelName}
                                inputName={inputName}
                                type={type}
                                placeholder={placeholder}
                                onChange={onChange}
                            />
                            <SubmitButton onClick={onClick} />
                            <Result result={result} />
                        </div>
                        <div className="col-md-8">
                            <h5 className="text-center text-uppercase">Gambar</h5>
                            <img className="d-block mx-auto w-50" src={`/img/${image}`} alt={image} />
                        </div>
                    </div>
                    <FormulaModal />
                </>
            }
        />
    )
}