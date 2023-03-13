import axios from "axios";
import { React, useState } from "react";
import { baseURL } from "../../../routes/Config";

const UbahPassword = ({ token }) => {
  const [data, setData] = useState({
    password: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/users/edit/password`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === "fail") {
          alert(response.data.message);
        } else if (response.data.status === "success") {
          alert(response.data.message);
        }

        setData({
          password: "",
          newPassword: "",
          newPasswordConfirmation: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card-body px-0 pb-2 mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-none border-0">
              <div className="card-header pb-0">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 font-weight-bolder">Ubah Password</h6>
                </div>
              </div>
              <div className="card-body pt-2">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label
                          htmlFor="password"
                          className="form-control-label"
                        >
                          Password Lama
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Masukkan password lama"
                          value={data.password}
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="newPassword"
                          className="form-control-label"
                        >
                          Password Baru
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Masukkan password baru"
                          value={data.newPassword}
                          name="newPassword"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="newPasswordConfirmation"
                          className="form-control-label"
                        >
                          Konfirmasi password baru
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Masukkan kembali password baru"
                          value={data.newPasswordConfirmation}
                          name="newPasswordConfirmation"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm mt-4"
                    style={{ width: "100%" }}
                  >
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahPassword;
