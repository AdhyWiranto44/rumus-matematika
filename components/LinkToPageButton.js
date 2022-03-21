import Link from 'next/link';


export default function LinkToPageButton({url, title}) {
    return (
        <Link href={url}>
            <a className="btn btn-primary shadow me-2 mb-2">{title}</a>
        </Link>
    );
}