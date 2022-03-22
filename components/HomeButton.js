import Link from 'next/link';


export default function HomeButton() {
    return (
        <div className="row mb-3">
            <div className="col">
                <Link href="/">
                    <a className="btn btn-primary fw-bold" style={{
                        borderBottom: "5px solid #0B5ED7"
                    }}>Home</a>
                </Link>
            </div>
        </div>
    );
}