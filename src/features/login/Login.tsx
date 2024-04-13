import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="mx-auto w-[50%] my-10 ">
      <h3 className="text-6xl font-bold text-center text-tertiary mb-10 p-10">
        LOGIN
      </h3>
      <form>
        <label className="p-2 text-tertiary">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-10 rounded-lg px-4 py-1 "
        />
        <label className="p-2 text-tertiary">Password</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Password"
          className="mb-10 rounded-lg px-4 py-1 "
        />
      </form>
    </div>
  );
}

export default Login;
