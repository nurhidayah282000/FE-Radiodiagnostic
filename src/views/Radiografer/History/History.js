import axios from "axios";
import { React, useState, useEffect } from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import { baseURL } from "../../../routes/Config";
import { Link } from "react-router-dom";

const History = () => {
  const [data, setData] = useState([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/radiographics/all`, {
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
  }, []);

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
            <div className="row p-0">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-header pb-2 p-4">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0 font-weight-bolder">
                        History Pasien
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="w-4 col-1 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0">
                              Kode RM
                            </th>
                            <th className="col-8 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                              Nama Pasien
                            </th>

                            <th className="col-2 text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-2 pe-0">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item) => (
                            <tr>
                              <td className="ps-0">
                                <p className="text-xs text-secondary mb-0 text-center">
                                  {item.medic_number}
                                </p>
                              </td>
                              <td className="align-middle text-start text-sm ps-4">
                                <p className="text-xs text-secondary mb-0">
                                  {item.fullname}
                                </p>
                              </td>

                              <td className="align-middle text-sm">
                                <Link
                                  to={`/radiografer-view-history/${item.radiographics_id}`}
                                >
                                  <span className="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                    Lihat History Pasien
                                  </span>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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

export default History;
