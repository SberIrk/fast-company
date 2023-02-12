import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassport, setShowPassport] = useState(false);
    const toggleShowPassword = () => {
        setShowPassport(prevState => !prevState);
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className=" col-form-label"> {label} </label>
            <div className="input-group has-validation">
                <input className={`form-control ${(error) ? " is-invalid" : ""}`}
                    type = {showPassport ? "text" : type}
                    name = {name}
                    id = {name}
                    value = {value}
                    onChange = {onChange}
                />
                {type === "password" && (
                    <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i className={
                            "bi bi-eye" + (showPassport ? "-slash" : "")
                        }/>
                    </button>
                )}
                {error && <div className="invalid-feedback" >{error}</div>}
            </div>

        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;