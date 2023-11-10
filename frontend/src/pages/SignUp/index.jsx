import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();

  const onSubmit =  (event) => {
    event.preventDefault();
    axios.post('/api/1.0/users', {
        username,
        email,
        password,
    })
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div>
        <label htmlFor="Username">Username</label>
        <input
          id="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordr">Password Repeat</label>
        <input
          id="passwordr"
          type="password"
          onChange={(event) => setPasswordR(event.target.value)}
        />
      </div>
      <button
        disabled={!username || !email || !password || password !== passwordR}
        
      >
        Sign up
      </button>
    </form>
  );
}
