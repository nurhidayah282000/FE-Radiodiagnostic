import { React, useState, useEffect } from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import RadiografiPanoramikCard from "../../../component/Card/RadiografiPanoramikCard";
import UploadGambarSuccess from "../../../component/Alerts/UploadGambarSuccess";
import axios from "axios";
import { baseURL } from "../../../routes/Config";

const RadiografiPanoramik = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(undefined);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    let url = `${baseURL}/radiographics/all`;
    if (month !== undefined) {
      url = `${baseURL}/radiographics/all?month=${month}`;
    }

    axios
      .get(`${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === "fail") {
          setData([]);
        } else {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [month]);

  console.log(data);

  return (
    <div>
      <body className="g-sidenav-show bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarRadiografer />
        </aside>
        <main className="main-content position-relative border-radius-lg">
          <HeaderUser />
          <div className="container-fluid py-2">
            <div className="row mb-4">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-header p-1">
                    <div className="row p-2">
                      <div className="col card-header p-4 pt-3">
                        <h6 className="font-weight-bolder">
                          Radiografi Panoramik
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          Hasil diagnosa pada tabel di bawah merupakan hasil
                          diagnosa
                          <br />
                          sementara yang perlu diverifikasi oleh dokter
                        </p>
                      </div>
                      <div className="col card-header pt-3 text-end">
                        <a
                          className="btn bg-gradient-primary btn-sm mb-0"
                          href="/radiografer-upload-gambar-panoramik"
                        >
                          <i className="fas fa-plus"></i>&nbsp;&nbsp;Upload
                          Gambar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="row">
                      <div className="col-md-2">
                        <p className="ps-0 text-uppercase text-secondary text-xxs font-weight-bolder">
                          Rekapitulasi
                        </p>
                      </div>
                      <div className="col-md-2">
                        {/* <p className="ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          Oktober
                        </p> */}

                        <div className="row-cols-md-3 ">
                          <div>
                            <select
                              className=" ps-4 text-uppercase text-primary textr-start text-xxs font-weight-bolder border-0"
                              name="month"
                              onChange={(e) => setMonth(e.target.value)}
                            >
                              <option value="01">Januari</option>
                              <option value="02">Februari</option>
                              <option value="03">Maret</option>
                              <option value="04">April</option>
                              <option value="05">Mei</option>
                              <option value="06">Juni</option>
                              <option value="07">Juli</option>
                              <option value="08">Agustus</option>
                              <option value="09">September</option>
                              <option value="10">Oktober</option>
                              <option value="11">November</option>
                              <option value="12">Desember</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <di className="col-md-2">
                        <p className="ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          {data.length} <span>Gambar</span>
                        </p>
                      </di>
                      <di className="col-md-2">
                        <p className="btn btn-link mb-0 btn-sm mt-0 pt-0 ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          <i
                            className="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>{" "}
                          &nbsp; Download
                        </p>
                      </di>
                      <hr
                        style={{
                          height: "1px",
                          borderWidth: "0px",
                          color: "gray",
                          backgroundColor: "gray",
                          marginBottom: "0px",
                          marginTop: "0px",
                        }}
                      />
                    </div>
                  </div>
                  {/* <!-- </card> --> */}
                  <div className="row p-3 ">
                    {data.length > 0 ? (
                      data.map((item) => (
                        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                          <RadiografiPanoramikCard data={item} />
                        </div>
                      ))
                    ) : (
                      <center>Belum ada Data</center>
                    )}
                    <UploadGambarSuccess />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default RadiografiPanoramik;
