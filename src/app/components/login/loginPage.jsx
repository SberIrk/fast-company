import React, { useEffect, useState } from "react";
import TextField from "./textField";
import { validator } from "../../utilits/validator";
const LoginPage = () => {
    const [data, setDate] = useState({
        email: {
            value: "",
            label: "Email"
        },
        password: {
            type: "password",
            value: "",
            label: "Пароль"
        }
    });

    const validatorConfig = {
        email: {
            isRequiredText: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Электронная почта введён некорректно"
            }
        },
        password: {
            isRequiredText: {
                message: "Пароль обязательно для заполнения"
            },
            noSpace: {
                message: "В пароле не должно присутствовать пробелы"
            },
            isCaption: {
                message: "Пароль должнен содержать как минимум одну заглавную букву"
            },
            isDigital: {
                message: "Пароль должнен содержать как минимум одну цифру"
            },
            min: {
                message: "Пароль должнен содержать не менее 8-ми символов",
                value: 8
            }
        }
    };

    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = ({ target }) => {
        setDate((prevState) => {
            prevState[target.name].value = target.value;
            return { ...prevState };
        });
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        console.log(data);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form className="form-inline m-3" onSubmit={handleSubmit}>
                        {Object.keys(data).map((key) => {
                            return (
                                <TextField key={key}
                                    label={data[key].label}
                                    type={data[key].type}
                                    name={key}
                                    value={data[key].value}
                                    onChange={handleChange}
                                    error={errors[key]}
                                />
                            );
                        })}
                        <button className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Вход</button>
                    </form>
                </div>
            </div>
        </div>);
};

export default LoginPage;