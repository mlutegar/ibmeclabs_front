import React, {useState} from 'react';
import {LoginPageStyle} from "./Style";
import Logo from "../../svg/Logo";
import TermsModal from "../TermsModal/TermsModal";
import InvertedButton from "../InvertedButton/InvertedButton";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const LoginPage = ({}) => {
    const [matricula, setMatricula] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTermsChange = (e) => {
        // Este handler não será chamado devido ao preventDefault no onClick
    };

    const handleTermsClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleModalAccept = () => {
        setTermsAccepted(true);
        setIsModalOpen(false);
    };

    const handleModalReject = () => {
        setTermsAccepted(false);
        setIsModalOpen(false);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            setIsModalOpen(true);
            return;
        }
        // Aqui você faria a submissão do formulário
        console.log('Formulário submetido:', { matricula, termsAccepted });
    };

    const handleSignUpClick = () => {
        // Navegar para página de cadastro
        console.log('Navegando para página de cadastro');
    };

    return (
        <LoginPageStyle>
            <div className="login-page">

                <Logo />

                <div className="titulo-login">
                    <div className="bem-vindo">
                        Seja bem-vindo!
                    </div>
                    <div className="sistema">
                        Sistema de empréstimo dos laboratórios IBMEC
                    </div>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="id_matricula">Matrícula</label>
                    <input
                        type="text"
                        id="id_matricula"
                        name="matricula"
                        placeholder="Coloque sua matricula estudantil"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        required
                    />

                    <CustomCheckbox
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                        onClick={handleTermsClick}
                        id="aceitar_termos"
                    >
                        Li e aceito os <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Termos de Uso e Política de Privacidade</a>
                    </CustomCheckbox>

                    <div className="botoes">
                        <button
                            type="submit"
                            className="botao-login"
                            disabled={!termsAccepted}
                        >
                            Entrar
                        </button>
                        <InvertedButton
                            texto="Se cadastre"
                            onClick={handleSignUpClick}
                            id="botao-cadastro1"
                        />
                    </div>
                </form>

                <TermsModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onAccept={handleModalAccept}
                    onReject={handleModalReject}
                />
            </div>
        </LoginPageStyle>
    );
}

export default LoginPage;