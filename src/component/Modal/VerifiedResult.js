import React from "react";

const VerifiedResult = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "30%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <p className="ms-2 pt-0 mt-0 mb-0 font-weight-bold text-dark ">
                Verifikasi Diagnosa
              </p>
              <p className="mt-2 ms-2 mb-0 badge border-radius-xl text-xs  badge-sm bg-gradient-faded-success-vertical">
              <i className="fa fa-check"></i>&nbsp; Telah Diverifikasi
                </p>

              <p className="text-secondary text-xs ms-2 mt-2">
                Radiodiagnosis Sistem
              </p>
              <div className="row">
                <div className="col-3">
                  <p className="text-xs text-dark ps-2">Gigi #11</p>
                </div>
                <div className="col-4 ps-0">
                  <ul>
                    <li className="text-xs text-warning font-weight-bold">
                      Karies Gigi
                    </li>
                  </ul>
                </div>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0px",
                    color: "gray",
                    backgroundColor: "gray",
                    marginBottom: "2px",
                  }}
                />
              </div>
              <div className="row">
                <p className="text-secondary text-xs ms-2 mt-2 mb-2">
                  Radiodiagnosis Verifikator
                </p>
                <div className="col-3">
                  <p className="text-xs text-dark ps-2">Gigi #11</p>
                </div>
                <div className="col-4 ps-0">
                  <ul>
                    <li className="text-xs text-warning font-weight-bold">
                      Karies Gigi
                    </li>
                  </ul>
                </div>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0px",
                    color: "gray",
                    backgroundColor: "gray",
                    marginBottom: "2px",
                  }}
                />
                <p className="text-secondary text-xs ms-2 mt-2 mb-2">Catatan</p>
                <p className="text-xs text-dark ms-2">
                  pada gigi nomor 11 merupakan karies gigi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedResult;