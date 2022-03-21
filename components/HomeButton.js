import Link from 'next/link';


export default function HomeButton() {
    return (
        <Link href="/">
            <a className="btn btn-primary shadow">Home</a>
        </Link>
    );
}