import React, {} from "react";
import PropTypes from "prop-types";
import QualitieList from "../../ui/qualities/qualitieList";

const User = ({ name, rate, qualities, completedMeetings, professionName, onHandleEdit }) => {
    return <div>
        <h1>{name}</h1>
        <h4><b>Оценка: </b>{rate} </h4>
        <h4><b>Качество: </b><QualitieList qualities={qualities}/> </h4>
        <h4><b>Встреч: </b>{completedMeetings} </h4>
        <h4><b>Профессий: </b>{professionName}</h4>
        <button className={"btn btn-outline-primary mt-3"} onClick={onHandleEdit}>Изменить</button>
    </div>;
};

User.propTypes = {
    name: PropTypes.string,
    rate: PropTypes.number,
    qualities: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    completedMeetings: PropTypes.number,
    professionName: PropTypes.string,
    onHandleEdit: PropTypes.func
};
export default User;