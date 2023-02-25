import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import { validator } from "../../../utilits/validator";
import CheckBoxField from "../../common/form/checkBoxField";
const LoginForm = () => {
    const [data, setDate] = useState({
        email: "",
        password: "",
        stayOn: false
    });

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Электронная почта введён некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
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

    const handleChange = (target) => {
        setDate((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
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
        <form className="form-inline m-3" onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Вход</button>
        </form>);
};

export default LoginForm;