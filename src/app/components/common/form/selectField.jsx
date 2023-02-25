import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ label, value, onChange, name, defaultOption, options, error }) => {
    const optionsArray =
        (!Array.isArray(options) && typeof (options) === "object")
            ? Object.values(options)
            : options;

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return `form-select ${(error) ? " is-invalid" : ""}`;
    };
    return (
        <div className="mb-4">
            <label
                className="form-label"
                htmlFor={name}
            >
                {label}
            </label>
            <select
                className={getInputClasses()}
                value={value}
                onChange={handleChange}
                name={name}
                id={name}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length &&
                    optionsArray.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>);
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func,
    error: PropTypes.string,
    name: PropTypes.string
};

export default SelectField;