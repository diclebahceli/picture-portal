import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/1.0/users", {
      username,
      email,
      password,
    });
  };
  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form onSubmit={onSubmit} className="card">
          <div className="text-center card-header">
            <h1>Sign up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                id="Username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                className="form-control"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordr" className="form-label">
                Password Repeat
              </label>
              <input
                className="form-control"
                id="passwordr"
                type="password"
                onChange={(event) => setPasswordR(event.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  !username || !email || !password || password !== passwordR
                }
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
