export default function FormulaModal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Daftar Rumus</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="w-100 mb-3" src="/img/rumus-bangun-datar.jpg" />
                    <img className="w-100 mb-3" src="/img/rumus-bangun-ruang.jpg" />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                </div>
                </div>
            </div>
        </div>
    )
}