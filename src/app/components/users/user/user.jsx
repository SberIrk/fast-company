import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import QualitieList from "../qualitieList";

const User = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    const handleReturn = () => {
        history.push("/users");
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    if (!user) {
        return "Loading...";
    }
    return <>
        <h1>{user.name}</h1>
        <h4><b>Оценка: </b>{user.rate} </h4>
        <h4><b>Качество: </b><QualitieList qualities={user.qualities}/> </h4>
        <h4><b>Встреч: </b>{user.completedMeetings} </h4>
        <h4><b>Профессий: </b>{user.profession.name}</h4>
        <button className={"btn btn-outline-primary"} onClick={handleReturn}>Все пользователи</button>
    </>;
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};
export default User;