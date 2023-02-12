import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/users/userPage/userPage";
import UsersList from "../components/users/usersList";
const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;