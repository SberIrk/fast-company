import React, { useState } from "react";
import LoginForm from "../components/ui/login/loginForm";
import RegisterForm from "../components/ui/login/registerForm";
import { useParams } from "react-router-dom";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const toggleFormType = (params) => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4 shadow p-4">
                    {formType === "register"
                        ? <>
                            <h3 className="mb-4">Зарегестироваться:</h3>
                            <RegisterForm />
                            <p> У вас уже есть аккаунт?  <a role="button" onClick={toggleFormType}>Войти</a></p>
                        </>
                        : <>
                            <h3 className="mb-4">Войти:</h3>
                            <LoginForm />
                            <p>У вас нет аккаунт? <a role="button" onClick={toggleFormType}>Зарегистрироваться</a></p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;