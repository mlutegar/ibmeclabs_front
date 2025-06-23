import React, {useEffect} from 'react';
import {TermsModalStyle} from "./Style";

const TermsModal = ({isOpen, onClose, onAccept, onReject}) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <TermsModalStyle>
            <div className={`modal-overlay ${isOpen ? 'show' : ''}`}
                 onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
                <div className={`modal-container ${isOpen ? 'show' : ''}`}>
                    <div className="modal-header">
                        <h4 className="modal-title">Termo de Aceite e Regulamento de Uso de Equipamentos – IBMEC
                            Labs</h4>
                        <button type="button" className="modal-close" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-content">
                            <p>Bem-vindo(a) ao sistema de empréstimo de equipamentos e notebooks dos Laboratórios de
                                Engenharias, Tech e Arquitetura do Ibmec. Antes de prosseguir e utilizar nossos
                                recursos, é
                                fundamental que você leia, compreenda e concorde com os termos e condições descritos
                                neste
                                documento.</p>
                            <p>Este Termo de Aceite visa regular o uso dos equipamentos disponibilizados, garantir a sua
                                conservação, estabelecer as responsabilidades dos usuários e adequar nossas práticas à
                                Lei Geral
                                de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
                            <p>Ao clicar em "Eu li e aceito os termos", você confirma sua concordância com todas as
                                cláusulas
                                aqui apresentadas.</p>

                            <h2>Regulamento de Uso e Empréstimo de Equipamentos</h2>

                            <h4>1. Elegibilidade e Restrição de Retirada:</h4>
                            <p>O empréstimo de equipamentos e notebooks é um benefício exclusivo para:</p>
                            <ul>
                                <li>Professores(as) do Ibmec;</li>
                                <li>Colaboradores(as) do Ibmec;</li>
                                <li>Alunos(as) regularmente matriculados e que estejam participando ativamente de
                                    projetos de
                                    pesquisa ou atividades acadêmicas devidamente comprovadas e vinculadas aos cursos
                                    oferecidos
                                    pelo ibmec.
                                </li>
                            </ul>

                            <h4>2. Procedimento de Empréstimo e Devolução:</h4>
                            <ul>
                                <li><strong>Disponibilidade:</strong> A retirada de qualquer equipamento está
                                    condicionada à sua
                                    disponibilidade no momento da solicitação. O Responsável Técnico dos Laboratórios
                                    (ou sua
                                    equipe designada) realizará a verificação.
                                </li>
                                <li><strong>Prazo e Devolução:</strong> A data estipulada para a devolução do
                                    equipamento deve
                                    ser rigorosamente cumprida. A devolução deve ser realizada diretamente a um membro
                                    da equipe
                                    técnica dos Laboratórios, que verificará as condições do item.
                                </li>
                                <li><strong>Notebooks</strong> - Empréstimo de 07:30 às 21:30, não podendo sair da
                                    instituição
                                    com o bem e a devolução deverá ser feita no mesmo dia da retirada;
                                </li>
                                <li><strong>Equipamentos de uso geral</strong> - Empréstimo de até 7 dias corridos,
                                    podendo sair
                                    da instituição com o bem e haverá a possibilidade de extensão do empréstimo por mais
                                    7 dias,
                                    com o pedido de renovação, limitado a 4 renovações máximas por bem.
                                </li>
                                <li><strong>Equipamentos periféricos</strong> - Empréstimo de 07:30 às 21:30, não
                                    podendo sair
                                    da instituição com o bem e a devolução deverá ser feita no mesmo dia da retirada;
                                </li>
                            </ul>

                            <h4>3. Responsabilidade Integral do Usuário:</h4>
                            <ul>
                                <li>Ao retirar um equipamento, você se torna integralmente responsável por sua
                                    conservação,
                                    integridade e segurança.
                                </li>
                                <li>Você assume a responsabilidade por quaisquer danos, perdas, roubos ou furtos que
                                    ocorram
                                    durante o período em que o equipamento estiver sob sua posse.
                                </li>
                                <li>Todos os equipamentos são de propriedade do Ibmec RJ - Unidade Barra e devem ser
                                    utilizados
                                    com zelo e cuidado.
                                </li>
                            </ul>

                            <h4>4. Conhecimento Técnico e Uso Adequado:</h4>
                            <ul>
                                <li>Ao solicitar o empréstimo, você atesta possuir o conhecimento técnico necessário
                                    para o
                                    manuseio e operação correta do(s) equipamento(s).
                                </li>
                                <li>Você se compromete a utilizar o equipamento exclusivamente para fins acadêmicos e/ou
                                    de
                                    pesquisa, respeitando suas especificações técnicas, manuais e limitações, a fim de
                                    garantir
                                    seu uso correto e evitar danos.
                                </li>
                                <li>É vedada a instalação de softwares não licenciados ou que violem as políticas de
                                    segurança e
                                    uso de tecnologia do Ibmec.
                                </li>
                            </ul>

                            <h4>5. Comunicação Obrigatória de Danos ou Defeitos:</h4>
                            <ul>
                                <li>Na eventualidade de qualquer dano, defeito, mau funcionamento, perda, roubo ou furto
                                    do
                                    equipamento, você tem a obrigação de comunicar o Corpo Técnico do IBMEC Labs
                                    imediatamente.
                                </li>
                                <li>A omissão desta comunicação será considerada uma infração grave.</li>
                            </ul>

                            <h4>6. Renovação do Empréstimo:</h4>
                            <ul>
                                <li>A renovação do empréstimo não é automática.</li>
                                <li>Caso necessite utilizar o equipamento por um período superior ao inicialmente
                                    acordado, você
                                    deverá solicitar a renovação presencialmente, antes da data de vencimento.
                                </li>
                                <li>A renovação só será concedida mediante a disponibilidade do equipamento (ausência de
                                    reservas) e a autorização expressa do Responsável Técnico dos Laboratórios.
                                </li>
                                <li>Mesmo com autorização, o empréstimo deve ser revalidado a cada 7 (sete) dias,
                                    mediante
                                    apresentação do equipamento para verificação, caso haja disponibilidade.
                                </li>
                            </ul>

                            <h4>7. Penalidades por Atraso ou Danos:</h4>
                            <p>O descumprimento das normas estabelecidas neste regulamento, especialmente no que tange
                                aos
                                prazos de devolução e à integridade dos equipamentos, sujeitará o usuário às seguintes
                                penalidades, aplicadas de forma progressiva:</p>
                            <ul>
                                <li><strong>1ª Infração:</strong> Suspensão do direito a novos empréstimos por 1 (uma)
                                    semana.
                                </li>
                                <li><strong>2ª Infração:</strong> Suspensão do direito a novos empréstimos por 2 (duas)
                                    semanas.
                                </li>
                                <li><strong>3ª Infração:</strong> Suspensão do direito a novos empréstimos por 1 (um)
                                    mês.
                                </li>
                                <li><strong>4ª Infração ou mais:</strong> Suspensão do direito a novos empréstimos por
                                    prazo
                                    indeterminado.
                                </li>
                            </ul>
                            <h3>Importante:</h3>
                            <ul>
                                <li><strong>Danos e Perdas:</strong> Além das suspensões, em caso de danos (por mau uso,
                                    negligência ou acidente) ou perda/roubo/furto do equipamento, o usuário será
                                    responsabilizado financeiramente pelo custo do reparo ou pela reposição de um
                                    equipamento
                                    novo, de modelo igual ou superior, a critério do Ibmec, sem prejuízo de outras
                                    sanções
                                    acadêmicas ou legais cabíveis.
                                </li>
                                <li>A contagem das infrações é cumulativa durante todo o vínculo do usuário com o
                                    Ibmec.
                                </li>
                                <li>A aplicação das penalidades é de responsabilidade da Supervisão dos Laboratórios.
                                </li>
                            </ul>

                            <hr/>
                            <p>O Ibmec e os laboratórios de Engenharias, Tech e Arquitetura estão comprometidos com a
                                proteção
                                dos seus dados pessoais. Ao utilizar este software de empréstimo, coletamos e tratamos
                                os
                                seguintes dados:</p>
                            <ul>
                                <li><strong>Dados Cadastrais:</strong> Nome completo, matrícula, curso, e-mail
                                    institucional e
                                    telefone de contato.
                                </li>
                                <li><strong>Dados de Empréstimo:</strong> Equipamentos retirados, datas e horários de
                                    retirada e
                                    devolução, histórico de empréstimos e eventuais ocorrências (atrasos, danos).
                                </li>
                            </ul>

                            <h2>Finalidade do Tratamento:</h2>
                            <p>Utilizamos seus dados para as seguintes finalidades:</p>
                            <ul>
                                <li>Gerenciar e controlar o processo de empréstimo e devolução de equipamentos.</li>
                                <li>Garantir a disponibilidade e a segurança dos recursos dos laboratórios.</li>
                                <li>Comunicar informações importantes sobre seus empréstimos (lembretes de devolução,
                                    disponibilidade, etc.).
                                </li>
                                <li>Administrar e aplicar as penalidades previstas neste regulamento.</li>
                                <li>Gerar estatísticas internas (anonimizadas sempre que possível) para aprimorar nossos
                                    serviços.
                                </li>
                            </ul>

                            <h2>Compartilhamento e Segurança:</h2>
                            <p>Seus dados são tratados internamente pela equipe dos Laboratórios e, quando necessário,
                                por
                                setores administrativos do Ibmec para fins de cobrança ou aplicação de sanções. Adotamos
                                medidas
                                técnicas e administrativas para proteger seus dados contra acessos não autorizados e
                                situações
                                acidentais ou ilícitas.</p>

                            <h2>Seus Direitos:</h2>
                            <p>Como titular dos dados, você tem o direito de:</p>
                            <ul>
                                <li>Confirmar a existência de tratamento.</li>
                                <li>Acessar seus dados.</li>
                                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou
                                    excessivos.
                                </li>
                                <li>Obter informações sobre o compartilhamento de seus dados.</li>
                            </ul>
                            <p>Para exercer seus direitos ou esclarecer dúvidas sobre a LGPD, entre em contato com o
                                Corpo
                                Técnico ou a Supervisão dos Laboratórios.</p>

                            <h2>Armazenamento:</h2>
                            <p>Manteremos seus dados de empréstimo em nosso sistema enquanto você mantiver vínculo com o
                                Ibmec e
                                pelo período adicional necessário para cumprir obrigações legais ou regulatórias.</p>

                            <hr/>
                            <h2>Declaração de Aceite:</h2>
                            <p>Declaro que li, compreendi e estou de pleno acordo com todas as cláusulas e condições
                                estabelecidas neste Termo de Aceite e Regulamento de Uso de Equipamentos dos
                                Laboratórios de
                                Engenharias, Tech e Arquitetura do Ibmec. Comprometo-me a cumprir todas as normas aqui
                                descritas, ciente das responsabilidades e penalidades aplicáveis em caso de
                                descumprimento.</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="modal-btn modal-btn-secondary" onClick={onReject}>Rejeitar
                        </button>
                        <button type="button" className="modal-btn modal-btn-primary" onClick={onAccept}>Aceitar
                            Termos
                        </button>
                    </div>
                </div>
            </div>
        </TermsModalStyle>
    )
}

export default TermsModal;