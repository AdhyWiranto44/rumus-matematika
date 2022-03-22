export default function SubmitButton({onClick}) {
    return (
        <button className="btn btn-info mt-2 fw-bold" onClick={onClick} style={{
            borderBottom: "5px solid #2A97D1"
        }}>Submit</button>
    );
}