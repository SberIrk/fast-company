const _isRequiredText = (value) => (typeof value === "string")
    ? Boolean(value.trim())
    : false;

const _isEmail = (value) => (typeof value === "string")
    ? /^\S+@\S+\.\S+$/g.test(value)
    : false;

const _isSpace = (value) => (typeof value === "string")
    ? /^\S+$/g.test(value)
    : false;

const _isCaptionSymbol = (value) => (typeof value === "string")
    ? /[A-Z]/g.test(value)
    : false;

const _isContainDigit = (value) => (typeof value === "string")
    ? /\d/g.test(value)
    : false;

const _isMinSymbol = (value, min) => (typeof value === "string")
    ? min <= value.length
    : false;

const _validate = (validateMethod, data, config) => {
    let error = false;
    switch (validateMethod) {
    case "isRequiredText":
        error = !_isRequiredText(data.value);
        break;
    case "isEmail":
        error = !_isEmail(data.value);
        break;
    case "noSpace":
        error = !_isSpace(data.value);
        break;

    case "isCaption":
        error = !_isCaptionSymbol(data.value);
        break;

    case "isDigital":
        error = !_isContainDigit(data.value);
        break;

    case "min":
        error = !_isMinSymbol(data.value, config.value);
        break;
    }

    return (error)
        ? config.message
        : false;
};

export function validator(data, config) {
    const errors = {};
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            if (errors[fieldName]) {
                break;
            }
            const error = _validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
