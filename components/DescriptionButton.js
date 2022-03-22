import Link from 'next/link';


export default function DescriptionButton() {
    return (
        <button type="button" className="btn btn-info fw-bold d-inline me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
            borderBottom: "5px solid #0B5ED7"
        }}>Rumus</button>
    );
}