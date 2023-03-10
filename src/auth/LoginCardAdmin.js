import axios from "axios";
import { React, useState } from "react";
import { baseURL } from "../routes/Config";

const LoginCardAdmin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${baseURL}/authentications`, data)
      .then((response) => {
        const { data } = response.data;
        if (data.role === "admin") {
          sessionStorage.setItem("token", data.accessToken);
          window.location.href = "/data-user";
        } else {
          sessionStorage.removeItem("token");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-start">
                      <h4 className="font-weight-bolder">Sign In</h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div className="card-body">
                      <form role="form">
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            aria-label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            aria-label="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label className="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                            onClick={handleSubmit}
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="\register-admin"
                          className="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                    style={{
                      backgroundImage:
                        'url("https://img.freepik.com/free-photo/dentist-examines-x-ray-photo-teeths_140725-7693.jpg?w=740&t=st=1670307721~exp=1670308321~hmac=3b378673b0e2caaadd61a1c0860e3e0370a5f2e2beb552d489c0b274f6dd1421")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="mask bg-gradient-primary opacity-5"></span>
                    <h4 className="mt-5 text-white font-weight-bolder position-relative">
                      "PENS - UA Radiodiagnostic Report"
                    </h4>
                    <p className="text-white position-relative">
                      sistem informasi radiodiagnosis yang terintegrasi dengan
                      sistem deteksi otomatis kelainan gigi dan jaringan
                      penyangga dalam pembacaan skrining radiografi panoramik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginCardAdmin;
