import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { validator } from "../../../utilits/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import { useHistory } from "react-router-dom";
const UserEdit = ({ user, resetUser }) => {
    const history = useHistory();
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState([]);
    const [data, setData] = useState({
        ...user,
        profession: user.profession._id,
        qualities: user.qualities.map((optionName) => ({
            label: optionName.name,
            value: optionName._id,
            color: optionName.color
        }))
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfessions(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Электронная почта введён некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя не указан"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        }
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        const updateDate = {
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        };
        const userId = updateDate._id;
        const result = api.users.update(userId, updateDate);
        result.then(() => {
            resetUser(null);
            history.replace(`/users/${userId}`);
        });
    };

    return (
        (data.email && qualities.length && professions.length)
            ? <form className="form-inline m-3" onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.password}
                />
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <SelectField
                    options={professions}
                    label="Выберите вашу профессию"
                    defaultOption={"Выбрать..."}
                    onChange={handleChange}
                    name="profession"
                    value={data.profession}
                    error={errors.profession}
                />
                <RadioField
                    options={[
                        { name: "Муж.", value: "male" },
                        { name: "Жен.", value: "female" },
                        { name: "Другое", value: "other" }
                    ]}
                    value={data.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите ваш пол"
                />
                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    name="qualities"
                    label="Выберите ваше качества"
                    defaultValue={data.qualities}
                />
                <button className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Изменить</button>
            </form>
            : "Loading..."

    );
};

UserEdit.propTypes = {
    user: PropTypes.object.isRequired,
    resetUser: PropTypes.func
};
export default UserEdit;