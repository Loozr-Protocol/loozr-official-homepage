import "./Modal.css";

export default function ModalDialog({ modalName, children }: { modalName: string, children: any }) {
  return (
    <>
      <div
        className="modal x-modal fade"
        id={modalName}
        tabIndex={-1}
        role="dialog"
        aria-labelledby={modalName}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-end pb-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
