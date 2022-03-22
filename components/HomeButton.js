import Link from 'next/link';


export default function HomeButton() {
    return (
        <Link href="/">
            <a className="btn btn-primary fw-bold d-inline me-2" style={{
                borderBottom: "5px solid #0B5ED7"
            }}>Home</a>
        </Link>
    );
}