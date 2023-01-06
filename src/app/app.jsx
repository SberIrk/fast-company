import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    // Берём данные api
    const [users, setUsers] = useState(api.users.fetchAll());

    // Кнопка удаления
    const handleDelete = (userID) => {
        setUsers((store) => {
            return store.filter(value => value._id !== userID);
        });
    };

    // Кнопка избраное
    const handleBookmark = (userID) => {
        setUsers((store) => {
            return store.map(value => {
                if (value._id === userID) {
                    value.bookmark = (!value.bookmark);
                }
                return value;
            });
        });
    };

    return (
        <React.StrictMode>
            <SearchStatus users = {users}/>
            <Users
                users = {users}
                handleDelete = {handleDelete}
                handleBookmark = {handleBookmark}
            />
        </React.StrictMode>
    );
}

export default App;
