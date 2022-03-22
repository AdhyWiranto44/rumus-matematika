import Link from 'next/link';


export default function LinkToPageButton({url, title}) {
    return (
        <Link href={url}>
            <a className="btn btn-primary me-2 mb-2 fw-bold" style={{
                borderBottom: "5px solid #0B5ED7"
            }}>{title}</a>
        </Link>
    );
}