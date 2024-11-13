# Nexus módulo Ticket

## Requisitos do sistema

1. **Registro da chegada do paciente na recepção**:
    - A recepcionista registra a chegada do paciente no sistema.
    - Dados registrados: nome do paciente, médico responsável e horário de chegada.
    - Sistema realiza validação dos dados e fornece feedback em tempo real para garantir que o registro está correto.
    - É impresso um **código único** e entregue ao paciente.

2. **Notificação automática ao médico**:
    - O sistema envia uma notificação ao consultório do médico para informar que o paciente chegou.
    - O médico recebe a notificação em seu dispositivo (computador, tablet ou celular) e pode responder com uma confirmação simples ("Pode atender" ou "Aguarde").

3. **Resposta do médico**:
    - O médico responde através do sistema, permitindo que a recepcionista visualize a confirmação em tempo real.
    - Caso o médico não possa atender imediatamente, a recepcionista pode reprogramar a notificação ou priorizar o atendimento de outros pacientes.

4. **Ação da recepcionista**:
    - Com a confirmação do médico, a recepcionista aciona o sistema para chamar o paciente.
    - Sistema gera um **código único** associado ao paciente para exibição pública.

5. **Exibição na TV do segundo andar**:
    - A TV exibe o **código único do paciente** (em vez do nome) e o número do consultório.
    - Mensagem pode incluir um alerta sonoro/visual para garantir que a chamada não passe despercebida.

6. **Atualização do status**:
    - O status do paciente é atualizado no sistema para "Chamado para atendimento".
    - Logs e registros de chamadas são mantidos para controle e auditoria.