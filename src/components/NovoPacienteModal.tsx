import { useState } from "react";
import PacienteService from "../utils/PacienteService";

export default function NovoPacienteModal() {

  const [nome, setNome] = useState("");
  const [nomeCurto, setNomeCurto] = useState("");
  const [sexo, setSexo] = useState("Masculino");
  const [dataNascimento, setDataNascimento] = useState("");
  const [certidaoNascimento, setCertidaoNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [convenio, setConvenio] = useState("");
  const [numeroConvenio, setNumeroConvenio] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [anotacoes, setAnotacoes] = useState("");

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
        observacoes: '',
      }
      const response = await PacienteService.create(novoPaciente);
      if (response) {
        alert('Paciente criado com sucesso!');
        (document.getElementById('modal_novo_paciente') as HTMLDialogElement)?.close();
      }
    } catch (error) {
      alert('Erro: ' + error);
    }
  }

  return (
    <dialog id="modal_novo_paciente" className="modal">
      <div className="modal-box flex flex-col gap-4 max-w-7xl">

        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Novo Paciente</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
        </div>

        <div className="flex flex-row gap-4">

          {/* Parte esquerda */}

          <div className="flex flex-col gap-4">

            <p className="font-bold text-lg">Paciente</p>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1 text-s w-[40%]">
                <p className="text-xs">Nome completo</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-[25%]">
                <p className="text-xs">Nome curto</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={nomeCurto}
                  onChange={e => setNomeCurto(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-[15%]">
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
              <div className="flex flex-col gap-1 w-[20%]">
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

            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs">Anotações</p>
              <textarea
                className="input input-bordered input-sm h-24 w-full resize-none"
                value={anotacoes}
                onChange={e => setAnotacoes(e.target.value)}
              />
            </div>

          </div>

          {/* Divisor horizontal */}

          <div className="divider divider-horizontal mx-0" />

          {/* Dados dos pais */}

          <div className="flex flex-col w-[35%] gap-4">

            <div className="flex flex-col gap-4">

              <p className="font-bold text-lg">Mãe</p>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-[60%]">
                  <p className="text-xs">Nome</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[40%]">
                  <p className="text-xs">CPF</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={endereco}
                  // onChange={e => setEndereco(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">Estado civil</p>
                  <select
                    className="select select-bordered select-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                    <option value="Viúvo">Viúvo(a)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">RG</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">Telefone</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={endereco}
                  // onChange={e => setEndereco(e.target.value)}
                  />
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-4">

              <p className="font-bold text-lg">Pai</p>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-[60%]">
                  <p className="text-xs">Nome</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[40%]">
                  <p className="text-xs">CPF</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={endereco}
                  // onChange={e => setEndereco(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">Estado civil</p>
                  <select
                    className="select select-bordered select-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                    <option value="Viúvo">Viúvo(a)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">RG</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={cep}
                  // onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[50%]">
                  <p className="text-xs">Telefone</p>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                  // value={endereco}
                  // onChange={e => setEndereco(e.target.value)}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

        <button className="btn btn-primary btn-sm" onClick={hangleBotaoAdicionarPaciente}>Adicionar paciente</button>
      </div>

    </dialog>
  );
}
