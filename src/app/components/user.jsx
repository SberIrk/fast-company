import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User=(props)=>{
    const {user,handleDelete} = props;

    // Зарисовка таблицы

    return (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td><Qualitie value = {user.qualities} /></td>
                <td>{(user?.profession?.name) ?? ""}</td>
                <td>{user.completedMeetings}</td>
                <td>{`${user.rate} / 5`}</td>
                <td><Bookmark {...props} /></td>
                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button></td>
            </tr>
    );

}

export default User;