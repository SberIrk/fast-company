import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    // Берём данные api
    const [users, setUsers] = useState(api.users.fetchAll());

    // Кнопка удаления
    const onDelete = (userID) => {
        setUsers((store) => {
            return store.filter(value => value._id !== userID);
        });
    };

    // Кнопка избраное
    const onToggleBookMark = (userID) => {
        setUsers((users) => {
            return users.map(user => {
                if (user._id === userID) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            });
        });
    };

    return (
        <React.StrictMode>
            <SearchStatus users = {users}/>
            <Users
                users = {users}
                onDelete = {onDelete}
                onToggleBookMark = {onToggleBookMark}
            />
        </React.StrictMode>
    );
}

export default App;
