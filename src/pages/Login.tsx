import { useState } from "react";
import { FaAt, FaKey } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-row h-screen bg-base-100">

      <div className="w-full h-full flex flex-col items-center justify-center gap-6">

        {/* Logo */}

        <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-64" />

        {/* FORMULÁRIO */}

        {/* E-mail */}

        <form className="flex flex-col gap-4 items-center w-1/4" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 w-full text-sm">
            <FaAt />
            <input
              type="email"
              className="grow"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            // required
            />
          </label>

          {/* Senha */}

          <label className="input input-bordered flex items-center gap-2 w-full text-sm">
            <FaKey />
            <input
              type="password"
              className="grow"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            // required
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Entrar
          </button>
        </form>

        <div>
          <p className="text-xs text-center">
            Não possui uma conta? <Link to="/signup" className="text-primary">Registre-se</Link>
          </p>
        </div>

      </div>

    </div>
  )
}
