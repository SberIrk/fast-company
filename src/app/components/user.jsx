import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User=(user)=>{

    return (
            <tr>
                <td>{user.name}</td>
                <td><Qualitie value = {user.qualities} /></td>
                <td>{(user?.profession?.name) ?? ""}</td>
                <td>{user.completedMeetings}</td>
                <td>{`${user.rate} / 5`}</td>
                <td><Bookmark {...user} /></td>
                <td><button type="button" className="btn btn-danger" onClick={() => user.handleDelete(user._id)}>Удалить</button></td>
            </tr>
    );

}

export default User;