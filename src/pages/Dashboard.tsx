import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import PacienteService from "../utils/PacienteService";
import { FaPrint } from "react-icons/fa6";
import NovoPacienteModal from "../components/NovoPacienteModal";

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
      // alert('Erro: ' + error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleBotaoNovoPaciente = async () => {
    (document.getElementById('modal_novo_paciente') as HTMLDialogElement)?.showModal();
  };

  return (
    <div className="flex flex-row gap-4 h-screen bg-base-100 p-4 pr-8">

      {/* Menu lateral */}

      <div className="flex flex-col gap-4 w-1/6">
        <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-3/4 mx-auto mt-2" />
        <ul className="menu rounded-box w-full h-full">
          <li><a className=" text-primary font-bold">Pacientes</a></li>
          <li><a className="">Representantes</a></li>
          <li><a className="">Vínculos</a></li>
          <li><a className="">Contratos</a></li>
        </ul>

        <div className="flex flex-row items-center w-full h-min p-2 text-sm">
          <div className="flex flex-col w-full">
            <p>Recepcionista</p>
            <p className="text-xs text-neutral-content">recepcionista@nexus.com.br</p>
          </div>
          <Link to="/" className="btn btn-ghost btn-xs text-error flex items-center">
            {/* <FaArrowRight /> */}
            Sair
          </Link>
        </div>
      </div>

      <div className="divider divider-horizontal mx-2" />

      <div className="flex flex-col gap-2 w-full">

        {/* Filtros */}

        <div className="flex flex-row gap-2 items-center">
          <select className="select select-bordered w-1/4 max-w-xs select-sm">
            <option>Nome</option>
            <option>Nome curto</option>
            <option>Código</option>
            {/* <option>CPF</option> */}
          </select>
          <label className="input input-bordered flex items-center gap-2 text-sm w-full input-sm">
            <FaSearch />
            <input type="text" placeholder="Procurar paciente" />
          </label>
          <div className="form-control">
            <label className="label cursor-pointer flex gap-2">
              <span className="label-text">Inativos</span>
              <input
                type="checkbox"
                className="toggle toggle-primary toggle-sm"
                checked={showInactive}
                onChange={() => setShowInactive(!showInactive)}
              />
            </label>
          </div>
          <button className="btn btn-primary btn-sm w-fit" onClick={handleBotaoNovoPaciente}>
            <span>Novo Paciente</span>
          </button>
        </div>

        {/* Tabela */}

        {pacientes.length > 0 && (
          <div className="overflow-x-hidden rounded-lg border-base-300 border-2">
            <table className="table table-zebra table-sm">
              <thead className="sticky top-0">
                <tr className="bg-base-300">
                  <th>Nome</th>
                  <th>Nome curto</th>
                  <th>Código</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pacientes.filter(({ ativo }) => showInactive || ativo).map(({ id, nome, nome_curto: nomeCurto, codigo, ativo }) => (
                  <tr key={id} className={ativo ? '' : 'opacity-60 italic'}>
                    <td className="w-64">{nome}</td>
                    <td>{nomeCurto}</td>
                    <td>{codigo}</td>
                    <td className="text-right">
                      <div className="tooltip tooltip-left" data-tip="Imprimir documentos">
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() => (document.getElementById('modal_imprimir_documentos') as HTMLDialogElement)?.showModal()}
                        >
                          <FaPrint />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* MODAIS */}

      <NovoPacienteModal />

      {/* Modal de 'Imprimir Documentos' */}

      <dialog id="modal_imprimir_documentos" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>

    </div>
  )
}
