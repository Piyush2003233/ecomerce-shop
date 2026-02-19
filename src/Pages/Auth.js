import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Enter valid email";

    // Password validation
    if (!form.password)
      newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    // Sign Up specific validation
    if (!isLogin) {
      if (!form.name) newErrors.name = "Username is required";

      if (!form.confirmPassword)
        newErrors.confirmPassword = "Confirm your password";
      else if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      // Fake demo login check
      if (isLogin) {
        if (form.email === "admin@gmail.com" && form.password === "123456") {
          setMessage("Login Successful ✅");
        } else {
          setMessage("Wrong email or password ❌");
        }
      } else {
        setMessage("Account Created Successfully 🎉");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
              setMessage("");
              setErrors({});
            }}
          >
            Sign In
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
              setMessage("");
              setErrors({});
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Username"
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {!isLogin && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>

          {message && <p className="message">{message}</p>}
        </form>

      </div>
    </div>
  );
};

export default Auth;