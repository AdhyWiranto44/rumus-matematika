export default function Input({labelName, inputName, type, placeholder, onChange}) {
    return (
        <>
            <label htmlFor={inputName} className="form-label mb-0">{labelName}</label>
            <input className="form-control mb-2" name={inputName} id={inputName} type={type} placeholder={placeholder} onChange={onChange}></input>
        </>
    );
}