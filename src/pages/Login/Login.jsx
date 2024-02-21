import React, { useContext } from "react";
import login from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Result } from "postcss";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="">
      <div className="hero py-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2  lg:text-left">
            <h1 className="text-5xl font-bold pb-6 lg:pb-0">Login now!</h1>
            <Lottie
              className="lg:block hidden"
              style={{ height: "350px" }}
              animationData={login}
              loop={true}
            />
          </div>
          <div className="w-1/2 card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              Do Not Have An Account? <Link to="/register">Register </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
