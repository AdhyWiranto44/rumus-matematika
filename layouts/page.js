import Head from 'next/head';
import DescriptionButton from '../components/DescriptionButton';
import FormulaModal from '../components/FormulaModal';
import HomeButton from '../components/HomeButton';
import Script from 'next/script';


export default function PageLayout({calculationForm, imageItem}) {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <title>Rumus Matematika</title>
            </Head>

            <div className="container-fluid pt-3">
                <div className="row mb-3">
                    <div className="col">
                        <HomeButton />
                        <DescriptionButton />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {calculationForm}
                    </div>
                    <div className="col-md-8">
                        <h5 className="text-center text-uppercase">Gambar</h5>
                        <img className="d-block mx-auto w-50" src={`/img/${imageItem}`} alt={imageItem} />
                    </div>
                </div>
                <FormulaModal />
            </div>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
        </>
    )
}