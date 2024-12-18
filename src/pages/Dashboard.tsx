import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import PacienteService from "../utils/PacienteService";
import { FaPrint } from "react-icons/fa6";

export default function Dashboard() {
  const [showInactive, setShowInactive] = useState(false);
  const [pacientes, setPacientes] = useState<any[]>([]);

  const [nome, setNome] = useState("");
  const [nomeCurto, setNomeCurto] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [certidaoNascimento, setCertidaoNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [convenio, setConvenio] = useState("");
  const [numeroConvenio, setNumeroConvenio] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [anotacoes, setAnotacoes] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const fetchPacientes = async () => {
    try {
      const data = await PacienteService.getAll();
      if (data) {
        setPacientes(data);
      }
    } catch (error) {
      alert('Erro: ' + error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleBotaoNovoPaciente = async () => {
    (document.getElementById('modal_novo_paciente') as HTMLDialogElement)?.showModal();
  };

  const hangleBotaoAdicionarPaciente = async () => {
    try {
      const novoPaciente = {
        unidade: 'ANA',
        nome,
        nome_curto: nomeCurto,
        sexo,
        data_nascimento: dataNascimento,
        local_nascimento: '',
        certidao_nascimento: certidaoNascimento,
        cpf,
        convenio,
        numero_convenio: numeroConvenio,
        cep,
        endereco,
        anotacoes,
        observacoes
      }
      const response = await PacienteService.create(novoPaciente);
      if (response) {
        fetchPacientes();
        alert('Paciente criado com sucesso!');
      }
    } catch (error) {
      alert('Erro: ' + error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card bg-base-100 size-11/12">
        <div className="card-body flex flex-row gap-4 overflow-y-auto">

          {/* Menu lateral */}

          <div className="flex flex-col items-center gap-4 w-1/4">
            <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-36 mx-auto pt-3" />
            <ul className="menu rounded-box w-full h-full">
              <li><a className="justify-center text-primary font-bold">Pacientes</a></li>
              <li><a className="justify-center">Representantes</a></li>
              <li><a className="justify-center">Vínculos</a></li>
              <li><a className="justify-center">Contratos</a></li>
            </ul>

            <div className="flex flex-row items-center w-full h-min pb-3 text-sm">
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

            {/* <div className="flex justify-end">
              <button className="btn btn-primary btn-sm w-fit">
                <FaPlus />
                <span>Novo Paciente</span>
              </button>
            </div> */}

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
                {/* <FaPlus /> */}
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
                          <button
                            title="Imprimir documentos"
                            className="btn btn-ghost btn-xs"
                            onClick={() => (document.getElementById('modal_imprimir_documento') as HTMLDialogElement)?.showModal()}
                          >
                            <FaPrint />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>

        {/* MODAIS */}

        {/* Modal de 'Novo Paciente' */}

        <dialog id="modal_novo_paciente" className="modal">
          <div className="modal-box flex flex-col gap-3 max-w-4xl">

            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Novo Paciente</h3>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
              </form>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1 text-s w-6/12">
                <p className="text-xs">Nome completo</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-4/12">
                <p className="text-xs">Nome curto</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={nomeCurto}
                  onChange={e => setNomeCurto(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-2/12">
                <p className="text-xs">Sexo</p>
                <select
                  className="select select-bordered select-sm w-full"
                  value={sexo}
                  onChange={e => setSexo(e.target.value)}
                >
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-2/12">
                <p className="text-xs">Data de nascimento</p>
                <input
                  type="date"
                  className="input input-bordered input-sm w-full"
                  value={dataNascimento}
                  onChange={e => setDataNascimento(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">CPF</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">Certidão de nascimento</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={certidaoNascimento}
                  onChange={e => setCertidaoNascimento(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">Convênio</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={convenio}
                  onChange={e => setConvenio(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">Número do convênio</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={numeroConvenio}
                  onChange={e => setNumeroConvenio(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1 w-1/4">
                <p className="text-xs">CEP</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-3/4">
                <p className="text-xs">Endereço</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">Anotações</p>
                <textarea
                  className="input input-bordered input-sm h-16 w-full resize-none"
                  value={anotacoes}
                  onChange={e => setAnotacoes(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs">Observações</p>
                <textarea
                  className="input input-bordered input-sm h-16 w-full resize-none"
                  value={observacoes}
                  onChange={e => setObservacoes(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-sm" onClick={hangleBotaoAdicionarPaciente}>Adicionar paciente</button>

          </div>
        </dialog>

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
    </div>
  )
}
