import styled from "styled-components";

const LoginPageStyle = styled.div`
    .login-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 1rem;
        box-sizing: border-box;
    }

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .logo svg {
        width: 13.3125rem;
    }

    .titulo-login {
        text-align: center;
        margin-bottom: 4rem;
    }

    .bem-vindo {
        color: #FFF;
        font-family: Krub;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 0.56rem;
    }

    .sistema {
        color: #FFF;
        text-align: center;
        font-family: Krub;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
    }

    .login-form label {
        display: block;
        width: 100%;
        text-align: left;
        margin-bottom: 1.37rem;
        color: #FFF;
        font-family: Krub;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .login-form input {
        width: 16.8125rem;
        height: 2.75rem;
        flex-shrink: 0;
        border-radius: 1.25rem;
        border: 1px solid #000;
        background: #FFF;
        text-align: center;
        margin-bottom: 2rem;

        color: rgba(0, 0, 0, 0.70);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .login-form input::placeholder {
        color: rgba(0, 0, 0, 0.70);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    input:focus {
        outline: none;
        border: 2px solid #F5AC00;
    }

    .botoes {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin-top: 2rem;
    }

    .botao-login {
        width: 16.8125rem;
        height: 2.75rem;
        flex-shrink: 0;
        border-radius: 2.3125rem;
        background: #F5AC00;
        border: none;
        color: #FFF;
        font-family: Krub;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .botao-login:hover:not(:disabled) {
        background: #e09900;
        transform: translateY(-2px);
    }

    .botao-login:disabled {
        background: #cccccc;
        cursor: not-allowed;
    }

    .botao-login:active {
        transform: translateY(0);
    }

    /* Responsividade */
    @media (max-width: 480px) {
        .login-page {
            padding: 1rem;
        }

        .bem-vindo {
            font-size: 1.8rem;
        }

        .sistema {
            font-size: 1rem;
        }

        .login-form input,
        .botao-login {
            width: 100%;
            min-width: 280px;
        }

        .logo svg {
            width: 10rem;
        }
    }
`;

export { LoginPageStyle };