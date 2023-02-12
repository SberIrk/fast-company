import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitieList = ({ qualities }) => {
    return (<>
        {qualities.map((qual) => (
            <Quality key={qual._id} {...qual} />
        ))}
    </>);
};

QualitieList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitieList;
