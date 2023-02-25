import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import User from "./user";
import UserEdit from "./userEdit";

const UserPage = ({ userId, action }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    const handleEdit = () => {
        history.push(`/users/${userId}/edit`);
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, [user]);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7 offset-md-2 shadow p-5">
                    {(user)
                        ? (action === "edit")
                            ? <UserEdit user={user}
                                resetUser={setUser}/>
                            : <User
                                {...user}
                                professionName={user.profession.name}
                                onHandleEdit={handleEdit}
                            />
                        : "Loading..."
                    }
                </div>
            </div>
        </div>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
    action: PropTypes.string
};
export default UserPage;