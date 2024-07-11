import React, { useContext, useState } from "react";
import login from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import google from "../../assets/images/google.png";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [errors, setErrors] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Successfully Registered");
        form.reset();
      })
      .then((error) => {
        console.log(error);
        setErrors(error);
      });
  };

  const handleGoogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero py-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2  lg:text-left">
            <h1 className="text-5xl font-bold pb-6 lg:pb-0">Register now!</h1>
            <Lottie
              className="lg:block hidden"
              style={{ height: "350px" }}
              animationData={login}
              loop={true}
            />
          </div>
          <div className="w-1/2 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <p className="text-sm font-semibold text-red-800">{errors}</p>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
              <div className="form-control mt-2">
                <button
                  onClick={handleGoogleSignin}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f5f7fa 0%, #c3cfe2 100%)",
                  }}
                  className="  btn  text-md hover:text-green-900"
                >
                  <FcGoogle />
                  Signin With Google
                </button>
              </div>
            </form>
            <p className="text-center">
              Already Have An Account? <Link to="/login">Login </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
