import React  from "react";
import User from "./user"

const Users=(props)=>{

    const {users} = props;

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избраное</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>{
                users.map( user => (<User  key = {user._id}
                    user = {user}
                    handleBookmark = {props.handleBookmark}
                    handleDelete = {props.handleDelete}
                />)
            )}</tbody>
        </table>
    );

}

export default Users;