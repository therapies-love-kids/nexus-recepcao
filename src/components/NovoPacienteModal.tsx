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
  const [observacoes, setObservacoes] = useState("");

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
        alert('Paciente criado com sucesso!');
      }
    } catch (error) {
      alert('Erro: ' + error);
    }
  }

  return (
    <dialog id="modal_novo_paciente" className="modal">
      <div className="modal-box flex flex-col gap-4 max-w-6xl">

        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Novo Paciente</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
        </div>

        {/* Parte esquerda */}

        <div className="flex flex-col gap-4">
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
  );
}
