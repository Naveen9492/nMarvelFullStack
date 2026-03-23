import { Component } from "react";
import Cookie from "js-cookie";
import "./index.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class AdminLogin extends Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    isAdmin: false,
    errorMsg: "",
  };

  componentDidMount() {
    // Check if JWT token exists in cookie
    const token = Cookie.get("adminToken");
    if (token) {
      // If token exists, navigate to admin page
      this.props.history.push("/admin");
    }
  }

  onChangeUsername = (event) => {
    this.setState({ usernameInput: event.target.value, errorMsg: "" });
  };

  onChangePassword = (event) => {
    this.setState({ passwordInput: event.target.value, errorMsg: "" });
  };

  onLogin = async (event) => {
    event.preventDefault();
    const { usernameInput, passwordInput } = this.state;
    const adminURL = "https://nmarvelfullstack.onrender.com/admin/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput,
      }),
    };
    try {
      const response = await fetch(adminURL, options);
      const data = await response.json();

      if (response.ok) {
        Cookie.set("adminToken", data.token, { expires: 1 });
        this.setState({ isAdmin: true, errorMsg: "" });
      } else {
        this.setState({ errorMsg: data.message || "Login failed" });
      }
    } catch (error) {
      this.setState({ errorMsg: "Something went wrong. Please try again." });
    }
  };

  render() {
    const { errorMsg, usernameInput, passwordInput, isAdmin } = this.state;

    if (isAdmin) {
      return <Redirect to="/admin" />;
    }

    return (
      <div className="admin-login-container">
        <form className="admin-login-form-container" onSubmit={this.onLogin}>
          <h1 className="admin-form-heading">Login to Admin Portal</h1>
          <label htmlFor="username-input" className="login-label">
            Username
          </label>
          <input
            type="text"
            id="username-input"
            className="login-input-field"
            placeholder="Enter username"
            value={usernameInput}
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password-input" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password-input"
            className="login-input-field"
            placeholder="Enter password"
            value={passwordInput}
            onChange={this.onChangePassword}
          />
          <button type="submit" className="admin-login-button">
            Login
          </button>
          {errorMsg !== "" && (
            <p className="login-error-message">*{errorMsg}</p>
          )}
        </form>
      </div>
    );
  }
}
export default AdminLogin;
