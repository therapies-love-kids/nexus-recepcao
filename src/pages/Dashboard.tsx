import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import PacienteService from "../utils/PacienteService";
import { FaArrowRight } from "react-icons/fa6";

export default function Dashboard() {
  const [showInactive, setShowInactive] = useState(false);
  const [pacientes, setPacientes] = useState<any[]>([]);

  const fetchPacientes = async () => {
    try {
      const data = await PacienteService.getAll();
      if (data) {
        setPacientes(data);
      }
    } catch (error) {
      console.error('Erro', error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  // const filteredPatients = showInactive ? patients : patients.filter(patient => patient.active);
  // const sortedPatients = filteredPatients.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card bg-base-100 size-5/6">
        <div className="card-body flex flex-row gap-4 overflow-y-auto">
          <div className="flex flex-col items-center gap-4 w-1/4">
            <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-36 mx-auto pt-3" />
            <ul className="menu rounded-box w-full h-full">
              <li><a className="justify-center text-primary font-bold">Pacientes</a></li>
              <li><a className="justify-center">Representantes</a></li>
              <li><a className="justify-center">Vínculos</a></li>
              <li><a className="justify-center">Contratos</a></li>
            </ul>
            <div className="flex flex-row items-center w-full h-min pb-3 text-sm">
              <p>Recepcionista</p>
              <Link to="/" className="btn btn-ghost btn-xs text-error flex items-center gap-1">
                <FaArrowRight />
                Sair
              </Link>
            </div>
          </div>
          <div className="divider divider-horizontal mx-2" />

          <div className="flex flex-col gap-2 w-full">

            {/* Filtros */}

            <div>
              <div className="flex flex-row gap-2">
                <select className="select select-bordered w-1/4 max-w-xs">
                  <option disabled selected>Filtrar por</option>
                  <option>Nome</option>
                  <option>Nome curto</option>
                  <option>Código</option>
                </select>
                <label className="input input-bordered flex items-center gap-2 w-3/4 text-sm">
                  <FaSearch />
                  <input type="text" className="grow" placeholder="Procurar paciente" />
                </label>
              </div>

              <div className="form-control w-44">
                <label className="label cursor-pointer">
                  <span className="label-text">Mostrar inativos</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={showInactive}
                    onChange={() => setShowInactive(!showInactive)}
                  />
                </label>
              </div>
            </div>

            {/* Tabela */}

            {pacientes.length > 0 && (
              <div className="overflow-x-auto rounded-box">
                <table className="table table-zebra table-sm">
                  <thead className="sticky top-0">
                    <tr className="bg-base-300">
                      {/* <th></th> */}
                      <th>Nome</th>
                      <th>Nome curto</th>
                      <th>Código</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pacientes.filter(({ ativo }) => showInactive || ativo).map(({ id, nome, nome_curto: nomeCurto, codigo, ativo }) => (
                      <tr key={id} className={ativo ? 'hover:text-primary' : 'opacity-50 hover:text-primary'}>
                        {/* <td>{id}</td> */}
                        <td>{nome}</td>
                        <td>{nomeCurto}</td>
                        <td>{codigo}</td>
                        <td className="w-20">{ativo ? '' : 'Inativo'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}



