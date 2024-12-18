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
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card bg-base-100 size-5/6">
        <div className="card-body flex justify-center items-center gap-4">

          {/* Logo */}

          <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-36" />

          {/* Formulário */}
          
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaAt className="text-neutral-content" />
              <input
                type="email"
                className="grow"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaKey className="text-neutral-content" />
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
              className="btn btn-primary w-1/3"
            >
              Entrar
            </button>
          </form>

          <hr />

          <div>
            <p className="text-sm text-center">
              Não possui uma conta? <Link to="/signup" className="text-primary">Registre-se</Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
